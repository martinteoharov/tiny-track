export type EventType =
  | "page_view"
  | "time_on_page"
  | "click"
  | "scroll"

export interface UserEvent {
  type: EventType;
  timestamp: string;
  url: string;
  elementType?: string;
  elementId?: string;
  elementClass?: string;
  maxScrollDepth?: number;
  duration?: number;
}
