import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { calendar, create } from 'ionicons/icons';

import Events from './pages/Events/Events';
import NewEvent from './pages/NewEvent/NewEvent';
import EditEvent from './pages/EditEvent/EditEvent';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import { EventsContextProvider } from './contexts/EventsContext';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <EventsContextProvider>
            <Route exact path="/events">
              <Events />
            </Route>
            <Route exact path="/newevent">
              <NewEvent />
            </Route>
            <Route exact path="/editevent/:id">
              <EditEvent />
            </Route>
            <Route exact path="/">
              <Redirect to="/events" />
            </Route>
          </EventsContextProvider>
        </IonRouterOutlet>
        <IonTabBar slot="bottom" color="dark">
          <IonTabButton tab="events" href="/events">
            <IonIcon aria-hidden="true" icon={calendar} size="small" />
            <IonLabel>Events</IonLabel>
          </IonTabButton>
          <IonTabButton tab="newevent" href="/newevent">
            <IonIcon aria-hidden="true" icon={create} size="small" />
            <IonLabel>Create</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
