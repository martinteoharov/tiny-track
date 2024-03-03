import { trackScrollEvent } from "./scroll";
import { collectPageInfo } from "./page";

const backendEndpoint = import.meta.env.VITE_BACKEND_ENDPOINT;

export enum EventType {
  PageView = "page_view",
  TimeOnPage = "time_on_page",
  Click = "click",
  Scroll = "scroll",
}

interface UserEvent {
  type: string;
  timestamp: string;
  url: string;
  elementType?: string;
  elementId?: string;
  elementClass?: string;
  maxScrollDepth?: number;
  duration?: number;
}

const trackEvent = (eventType: EventType, details: Partial<UserEvent>) => {
  const event: UserEvent = {
    type: eventType,
    timestamp: new Date().toISOString(),
    url: window.location.href,
    ...details,
  };

  console.log(`Sending event: ${eventType}`, event);

  fetch(`${backendEndpoint}/track`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(event),
  })
    .then((response) => {
      if (!response.ok) {
        console.error("Error sending event data", response.statusText);
      }
    })
    .catch((error) => {
      console.error("Error sending event data", error);
    });
};

const trackPageInfo = () => {
  const pageInfo = collectPageInfo();

  fetch(`${backendEndpoint}/track-page-info`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(pageInfo),
  });
};

document.addEventListener("DOMContentLoaded", () => {
  const pageVisitTimeStart = Date.now();

  trackEvent(EventType.PageView, {
    url: window.location.href,
    timestamp: new Date().toISOString(),
  });

  trackPageInfo();

  window.addEventListener("beforeunload", () => {
    const pageVisitDuration = Date.now() - pageVisitTimeStart;
    trackEvent(EventType.TimeOnPage, {
      duration: pageVisitDuration,
    });
  });
});

document.addEventListener("click", (e) => {
  if (e.target instanceof Element) {
    trackEvent(EventType.Click, {
      elementType: e.target.tagName,
      elementId: e.target.id,
      elementClass: e.target.className,
    });
  }
});

trackScrollEvent(trackEvent);
