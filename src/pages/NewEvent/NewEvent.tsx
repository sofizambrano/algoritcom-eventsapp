import { IonContent, IonPage, useIonRouter, useIonToast } from '@ionic/react';
import { useContext, useState } from 'react';

import './NewEvent.css';
import { Event } from '../../types/event';
import { IMAGES, TOAST_OPTIONS } from '../../constants/constants';
import PageHeader from '../../components/PageHeader/PageHeader';
import EventForm from '../../components/EventForm/EventForm';
import { EventsContext } from '../../contexts/EventsContext';

const NewEvent: React.FC = () => {
  const router = useIonRouter();
  const { addEvent } = useContext(EventsContext);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [presentToast] = useIonToast();

  const invalidData = (formData: Event): boolean => {
    const { name, description, date, image } = formData;
    return (
      !name ||
      !description ||
      Number.isNaN(Date.parse(date)) ||
      IMAGES.find((imageOption) => imageOption === image) === undefined
    );
  };

  const handleSubmit = (
    event: { preventDefault: () => void },
    formData: Event
  ) => {
    event.preventDefault();
    if (invalidData(formData)) return;

    setIsLoading(true);
    addEvent(formData);
    setTimeout(() => {
      presentToast({ ...TOAST_OPTIONS, message: 'Event created successfully' });
      router.push('/events', 'root');
      setIsLoading(false);
    }, 2000);
  };

  return (
    <IonPage>
      <PageHeader name="New event" />
      <IonContent fullscreen>
        <EventForm
          submitButtonLabel="Create event"
          isLoading={isLoading}
          handleSubmit={handleSubmit}
        />
      </IonContent>
    </IonPage>
  );
};

export default NewEvent;
