import { ToastOptions } from '@ionic/react';
import { v4 as uuidv4 } from 'uuid';

import { EventImage, ContextEvent } from '../types/event';

export const INITIAL_CONTEXT_EVENTS: ContextEvent[] = [
  {
    name: 'Barcelona vs. Real Madrid',
    description:
      'UEFA Champions League Semifinal: this classic game will take place at the Estadio Santiago Bernabéu in Madrid.',
    date: '2024-03-08',
    image: 'football',
    created: new Date().getTime(),
    id: uuidv4(),
  },
  {
    name: 'Awakenings Summer Festival 2024',
    description:
      "It's that time of the year! Your ultimate techno holiday is back: Awakenings Summer Festival at Hilvarenbeek will take place on July 5, 2024. Save the date & tell your friends.",
    date: '2024-07-05',
    image: 'party',
    created: new Date().getTime(),
    id: uuidv4(),
  },
  {
    name: 'Sailing Cruise & Vineyard Visit with Wine Tasting',
    description:
      'Board a luxury sailboat and cruise along the coast of Barcelona and visit a winery in Alella. Stroll through its vineyards on a guided tour, taste 4 local wines and enjoy a typical Catalan brunch.',
    date: '2024-02-27',
    image: 'vineyard',
    created: new Date().getTime(),
    id: uuidv4(),
  },
  {
    name: 'World Energy Congress',
    description:
      'The most prestigious and influential event driving energy transitions for a century. The 26th edition of the Congress welcomes you to Rotterdam from 22-25 April 2024.',
    date: '2024-04-22',
    image: 'congress',
    created: new Date().getTime(),
    id: uuidv4(),
  },
];

export const IMAGES: EventImage[] = [
  'birthday',
  'concert',
  'congress',
  'dinner',
  'event',
  'football',
  'marathon',
  'market',
  'party',
  'vineyard',
];

export const TOAST_OPTIONS: ToastOptions = {
  duration: 2000,
  color: 'light',
  position: 'top',
  translucent: true,
};
