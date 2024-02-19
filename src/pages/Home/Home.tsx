import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { IonContent, IonPage } from '@ionic/react';

import { PageHeader } from '../../components/PageHeader';
import { PayslipListContainer } from '../../containers/PayslipListContainer';

export const HomePage: FC = () => {
  const { t } = useTranslation();

  return (
    <IonPage>
      <PageHeader title={t('homeTitle')} />
      <IonContent fullscreen>
        <PayslipListContainer />
      </IonContent>
    </IonPage>
  );
};
