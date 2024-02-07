import { IonButton, IonLabel, IonSpinner } from '@ionic/react';
import { ComponentProps } from 'react';

import './ButtonWithSpinner.css';

interface ButtonWithSpinnerProps extends ComponentProps<typeof IonButton> {
  label: string;
  isLoading: boolean;
}

const ButtonWithSpinner: React.FC<ButtonWithSpinnerProps> = ({
  label,
  isLoading = false,
  ...props
}) => {
  return (
    <IonButton {...props} disabled={isLoading} className="spinner-button">
      {isLoading ? (
        <IonSpinner className="spinner" />
      ) : (
        <IonLabel>{label}</IonLabel>
      )}
    </IonButton>
  );
};

export default ButtonWithSpinner;
