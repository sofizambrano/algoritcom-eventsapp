import {
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { checkmarkCircle } from 'ionicons/icons';
import { useState } from 'react';

import './ImagePickerModal.css';
import { EventImage } from '../../types/event';

interface ImagePickerModalProps {
  images: EventImage[];
  selectedImage?: EventImage;
  onDismiss: (data?: string | null | undefined | number, role?: string) => void;
}

const ImagePickerModal: React.FC<ImagePickerModalProps> = ({
  images,
  selectedImage,
  onDismiss,
}) => {
  const [image, setImage] = useState<EventImage | null>(selectedImage || null);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="dark">
          <IonButtons slot="start">
            <IonButton color="medium" onClick={() => onDismiss(null, 'cancel')}>
              Cancel
            </IonButton>
          </IonButtons>
          <IonTitle>Pick Image</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={() => onDismiss(image, 'ok')} strong={true}>
              Ok
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonGrid>
          <IonRow>
            {images.map((imageOption, index) => {
              const checked = imageOption === image;
              return (
                <IonCol key={index} size="6">
                  <label>
                    <input
                      type="radio"
                      name="image"
                      value={imageOption}
                      checked={checked}
                      onChange={(e) => {
                        setImage(e.target.value as EventImage);
                      }}
                    />
                    <img
                      alt={imageOption}
                      src={`assets/${imageOption}.jpg`}
                      className="image-option"
                    />
                    {checked && (
                      <IonIcon
                        icon={checkmarkCircle}
                        color="light"
                        className="checked-icon"
                        size="large"
                      />
                    )}
                  </label>
                </IonCol>
              );
            })}
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default ImagePickerModal;
