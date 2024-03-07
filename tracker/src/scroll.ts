import { EventType } from "@tiny-track/common";

interface ScrollDetails {
  maxScrollDepth: number;
}

let maxScrollDepth = 0;
const debounceDuration = 100;
let timeout: number | null = null;

export function throttle<T extends (...args: any[]) => void>(
  func: T,
  limit: number,
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  return function (...args: Parameters<T>): void {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

export const trackScrollEvent = (
  trackEvent: (eventType: EventType, details: Partial<ScrollDetails>) => void,
): void => {
  const updateScrollEvent = (): void => {
    const scrollDepth = window.scrollY + window.innerHeight;
    if (scrollDepth > maxScrollDepth) {
      maxScrollDepth = scrollDepth;

      if (timeout) clearTimeout(timeout);
      timeout = window.setTimeout(() => {
        const details: ScrollDetails = {
          maxScrollDepth: Math.round(maxScrollDepth),
        };
        trackEvent(EventType.Scroll, details);
      }, debounceDuration);
    }
  };

  window.addEventListener("scroll", throttle(updateScrollEvent, 200));
};
