import { FC } from 'react';
import { IonContent, IonPage } from '@ionic/react';

import { HomePageHeader } from '../../components/HomePageHeader';
import { PayslipListContainer } from '../../containers/PayslipListContainer';

export const HomePage: FC = () => {


  return (
    <IonPage>
      <HomePageHeader />
      <IonContent fullscreen>
        <PayslipListContainer />
      </IonContent>
    </IonPage>
  );
};
