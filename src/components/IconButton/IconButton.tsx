import { IonButton, IonIcon } from '@ionic/react';

import './IconButton.css';

interface IconButtonProps {
  icon: string;
  onClick: React.MouseEventHandler<HTMLIonButtonElement>;
}

const IconButton: React.FC<IconButtonProps> = ({ icon, onClick }) => {
  return (
    <IonButton
      color="dark"
      size="small"
      shape="round"
      onClick={onClick}
      className="icon-button"
    >
      <IonIcon icon={icon} className="icon" />
    </IonButton>
  );
};

export default IconButton;
