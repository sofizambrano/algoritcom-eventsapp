import {
  IonCard,
  IonImg,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonTextarea,
  useIonModal,
} from '@ionic/react';
import { OverlayEventDetail } from '@ionic/react/dist/types/components/react-component-lib/interfaces';
import { imagesOutline } from 'ionicons/icons';
import { useEffect, useState } from 'react';

import './EventForm.css';
import IconButton from '../IconButton/IconButton';
import ImagePickerModal from '../ImagePickerModal/ImagePickerModal';
import ButtonWithSpinner from '../ButtonWithSpinner/ButtonWithSpinner';
import { Event, ContextEvent } from '../../types/event';
import { IMAGES } from '../../constants/constants';

interface EventFormProps {
  submitButtonLabel: string;
  isLoading: boolean;
  eventData?: ContextEvent;
  handleSubmit: (event: React.FormEvent, formData: Event) => void;
}

const EventForm: React.FC<EventFormProps> = ({
  submitButtonLabel,
  isLoading,
  eventData,
  handleSubmit,
}) => {
  const [formData, setFormData] = useState<Event>({
    name: '',
    description: '',
    date: '',
    image: '',
  });

  useEffect(() => {
    if (eventData) {
      setFormData(eventData);
    }
  }, [eventData]);

  const updateFormData = (name: string, value: string) => {
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const [presentModal, dismissModal] = useIonModal(ImagePickerModal, {
    images: IMAGES,
    selectedImage: formData.image,
    onDismiss: (data: string, role: string) => dismissModal(data, role),
  });

  const openModal = () => {
    presentModal({
      onWillDismiss: (ev: CustomEvent<OverlayEventDetail>) => {
        if (ev.detail.role === 'ok') {
          updateFormData('image', ev.detail.data);
        }
      },
    });
  };

  return (
    <IonCard>
      <form onSubmit={(e) => handleSubmit(e, formData)}>
        <IonList>
          <IonItem>
            <IonInput
              type="text"
              inputmode="text"
              required={true}
              label="Name"
              labelPlacement="floating"
              name="name"
              value={formData.name}
              onIonInput={(e) => updateFormData('name', e.detail.value!)}
            />
          </IonItem>
          <IonItem>
            <IonTextarea
              inputmode="text"
              required={true}
              label="Description"
              labelPlacement="floating"
              rows={5}
              name="description"
              value={formData.description}
              onIonInput={(e) => updateFormData('description', e.detail.value!)}
            />
          </IonItem>
          <IonItem>
            <IonInput
              type="date"
              required={true}
              label="Date"
              labelPlacement="floating"
              name="date"
              value={formData.date}
              onIonInput={(e) => updateFormData('date', e.detail.value!)}
            />
          </IonItem>
          <IonItem>
            <IonLabel>Image</IonLabel>
            <IonInput
              type="text"
              inputmode="text"
              required={true}
              label="Image"
              labelPlacement="floating"
              name="image"
              value={formData.image}
              className="image-input"
            />

            {IMAGES.find((image) => image === formData.image) != undefined ? (
              <IonImg
                src={`assets/${formData.image}.jpg`}
                className="selected-image"
                onClick={openModal}
              />
            ) : (
              <IconButton icon={imagesOutline} onClick={openModal} />
            )}
          </IonItem>
        </IonList>

        <div className="submit-button-container">
          <ButtonWithSpinner
            type="submit"
            color="dark"
            isLoading={isLoading}
            label={submitButtonLabel}
          />
        </div>
      </form>
    </IonCard>
  );
};

export default EventForm;
