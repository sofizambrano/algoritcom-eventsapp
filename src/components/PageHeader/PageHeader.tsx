import {
  IonBackButton,
  IonButtons,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/react';

import './PageHeader.css';

interface PageHeaderProps {
  name: string;
  backButton?: boolean;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  name,
  backButton = false,
}) => {
  return (
    <IonHeader>
      <IonToolbar color="dark">
        {backButton && (
          <IonButtons slot="start">
            <IonBackButton defaultHref="/events" />
          </IonButtons>
        )}
        <IonTitle>{name}</IonTitle>
      </IonToolbar>
    </IonHeader>
  );
};

export default PageHeader;
