import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  useIonRouter,
  useIonToast,
} from '@ionic/react';
import { pencil, trash } from 'ionicons/icons';
import { useContext } from 'react';

import './EventCard.css';
import { ContextEvent } from '../../types/event';
import IconButton from '../IconButton/IconButton';
import { TOAST_OPTIONS } from '../../constants/constants';
import { EventsContext } from '../../contexts/EventsContext';

const EventCard: React.FC<ContextEvent> = ({
  name,
  description,
  date,
  image,
  id,
}) => {
  const { deleteEvent } = useContext(EventsContext);
  const router = useIonRouter();
  const [presentToast] = useIonToast();

  const handleUpdate = () => {
    router.push(`/editevent/${id}`, 'root');
  };

  const handleDelete = () => {
    deleteEvent(id);
    presentToast({ ...TOAST_OPTIONS, message: 'Event deleted successfully' });
  };

  return (
    <>
      <IonCard>
        <div
          className="card-top-container"
          style={{
            backgroundImage: `url(assets/${image}.jpg)`,
          }}
        >
          <IconButton icon={trash} onClick={handleDelete} />
          <IconButton icon={pencil} onClick={handleUpdate} />
        </div>

        <IonCardHeader>
          <IonCardTitle>{name}</IonCardTitle>
          <IonCardSubtitle>{new Date(date).toDateString()}</IonCardSubtitle>
        </IonCardHeader>

        <IonCardContent>{description}</IonCardContent>
      </IonCard>
    </>
  );
};

export default EventCard;
