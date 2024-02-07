import { IonContent, IonPage, useIonRouter, useIonToast } from '@ionic/react';
import { useContext, useState } from 'react';
import { useParams } from 'react-router';

import './EditEvent.css';
import { Event } from '../../types/event';
import { IMAGES, TOAST_OPTIONS } from '../../constants/constants';
import PageHeader from '../../components/PageHeader/PageHeader';
import EventForm from '../../components/EventForm/EventForm';
import ButtonWithSpinner from '../../components/ButtonWithSpinner/ButtonWithSpinner';
import { EventsContext } from '../../contexts/EventsContext';

const EditEvent: React.FC = () => {
  const router = useIonRouter();
  const { id } = useParams<{ id: string }>();
  const { events, updateEvent, deleteEvent } = useContext(EventsContext);
  const eventData = events.find((event) => event.id === id);
  const [isUpdateLoading, setIsUpdateLoading] = useState<boolean>(false);
  const [isDeleteLoading, setIsDeleteLoading] = useState<boolean>(false);
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

  const handleUpdate = (
    event: { preventDefault: () => void },
    formData: Event
  ) => {
    event.preventDefault();
    if (invalidData(formData)) return;

    setIsUpdateLoading(true);
    updateEvent(id, formData);
    setTimeout(() => {
      presentToast({ ...TOAST_OPTIONS, message: 'Event updated successfully' });
      router.push('/events', 'root');
      setIsUpdateLoading(false);
    }, 2000);
  };

  const handleDelete = () => {
    setIsDeleteLoading(true);
    deleteEvent(id);
    setTimeout(() => {
      presentToast({ ...TOAST_OPTIONS, message: 'Event deleted successfully' });
      router.push('/events', 'root');
      setIsDeleteLoading(false);
    }, 2000);
  };

  return (
    <IonPage>
      <PageHeader name="Edit event" backButton={true} />
      <IonContent fullscreen>
        <EventForm
          submitButtonLabel="Save changes"
          isLoading={isUpdateLoading}
          eventData={eventData}
          handleSubmit={handleUpdate}
        />
        <div className="delete-button-container">
          <ButtonWithSpinner
            type="button"
            color="danger"
            fill="outline"
            isLoading={isDeleteLoading}
            label="Delete event"
            onClick={handleDelete}
          />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default EditEvent;
