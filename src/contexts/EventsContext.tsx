import React, { PropsWithChildren, useState } from 'react';
import { Event, ContextEvent } from '../types/event';
import { v4 as uuidv4 } from 'uuid';

import { INITIAL_CONTEXT_EVENTS } from '../constants/constants';

interface EventsContextModel {
  events: ContextEvent[];
  addEvent: (event: Event) => void;
  updateEvent: (id: string, event: Event) => void;
  deleteEvent: (id: string) => void;
}

export const EventsContext = React.createContext<EventsContextModel>({
  events: [],
  addEvent: () => {},
  updateEvent: () => {},
  deleteEvent: () => {},
});

export const EventsContextProvider: React.FC<PropsWithChildren> = (props) => {
  const [events, setEvents] = useState<ContextEvent[]>(INITIAL_CONTEXT_EVENTS);

  const addEvent = (event: Event): void => {
    const newEvent: ContextEvent = {
      ...event,
      created: new Date().getTime(),
      id: uuidv4(),
    };

    setEvents((currentEvents) => [...currentEvents, newEvent]);
    return;
  };

  const updateEvent = (id: string, event: Event): void => {
    setEvents((currentEvents) => {
      const updatedEvents = [...currentEvents];
      const eventIndex = events.findIndex((event) => event.id === id);
      const updatedEvent = { ...updatedEvents[eventIndex], ...event };
      updatedEvents[eventIndex] = updatedEvent;
      return updatedEvents;
    });
  };

  const deleteEvent = (id: string): void => {
    setEvents((currentEvents) => {
      const updatedEvents = [...currentEvents].filter(
        (event) => event.id !== id
      );
      return updatedEvents;
    });
  };

  const eventsContext: EventsContextModel = {
    events,
    addEvent,
    updateEvent,
    deleteEvent,
  };

  return (
    <EventsContext.Provider value={eventsContext}>
      {props.children}
    </EventsContext.Provider>
  );
};
