export type EventType = "page_view" | "page_exit" | "click" | "scroll";

export interface UserEvent {
  type: EventType;
  timestamp: string;
  url: string;
  elementType?: string;
  elementId?: string;
  elementClass?: string;
  maxScrollDepth?: number;
  duration?: number;
  referer?: string;
}
