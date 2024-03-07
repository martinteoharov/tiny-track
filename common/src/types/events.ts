export enum EventType {
  PageView = "page_view",
  TimeOnPage = "time_on_page",
  Click = "click",
  Scroll = "scroll",
}

export interface UserEvent {
  type: string;
  timestamp: string;
  url: string;
  elementType?: string;
  elementId?: string;
  elementClass?: string;
  maxScrollDepth?: number;
  duration?: number;
}
