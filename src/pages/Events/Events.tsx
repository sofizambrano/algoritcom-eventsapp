import {
  IonCol,
  IonContent,
  IonGrid,
  IonItem,
  IonList,
  IonPage,
  IonRow,
} from '@ionic/react';
import { useContext } from 'react';

import './Events.css';
import PageHeader from '../../components/PageHeader/PageHeader';
import EventCard from '../../components/EventCard/EventCard';
import { EventsContext } from '../../contexts/EventsContext';

const Events: React.FC = () => {
  const { events } = useContext(EventsContext);

  return (
    <IonPage>
      <PageHeader name="Events" />
      <IonContent fullscreen>
        {events.length >= 1 ? (
          <IonGrid>
            <IonRow>
              {[...events].reverse().map((event, index) => {
                return (
                  <IonCol
                    key={index}
                    size="12"
                    sizeSm="6"
                    sizeLg="4"
                    sizeXl="4"
                  >
                    <EventCard {...event} />
                  </IonCol>
                );
              })}
            </IonRow>
          </IonGrid>
        ) : (
          <IonList>
            <IonItem>No events created yet</IonItem>
          </IonList>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Events;
