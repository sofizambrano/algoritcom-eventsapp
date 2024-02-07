export type EventImage =
  | 'birthday'
  | 'concert'
  | 'congress'
  | 'dinner'
  | 'event'
  | 'football'
  | 'marathon'
  | 'market'
  | 'party'
  | 'vineyard';

export interface Event {
  name: string;
  description: string;
  date: string;
  image: EventImage | '';
}

export interface ContextEvent extends Event {
  created: number;
  id: string;
}
