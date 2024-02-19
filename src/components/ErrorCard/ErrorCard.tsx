import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { IonCard, IonCardContent, IonCardHeader, IonCardTitle } from '@ionic/react';

type ErrorCardProps = {
  errorText?: string;
}

export const ErrorCard: FC<ErrorCardProps> = ({ errorText }) => {
  const { t } = useTranslation();

  return (
    <IonCard color="danger">
      <IonCardHeader>
        <IonCardTitle>{t('errorTitle')}</IonCardTitle>
      </IonCardHeader>
      {errorText ? (
        <IonCardContent>{errorText}</IonCardContent>
      ) : null}
    </IonCard>
  );
}