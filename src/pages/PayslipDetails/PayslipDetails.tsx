import { FC } from 'react';
import { useTranslation } from 'react-i18next';
// eslint-disable-next-line import/named
import { RouteComponentProps } from 'react-router';
import { IonContent, IonPage } from '@ionic/react';

import { PageHeader } from '../../components/PageHeader';
import { PayslipDetailsContainer } from '../../containers/PayslipDetailsContainer';

type PayslipDetailsPageProps = RouteComponentProps<{
  id: string;
}>

export const PayslipDetailsPage: FC<PayslipDetailsPageProps> = ({ match }) => {
  const { t } = useTranslation();

  return (
    <IonPage>
      <PageHeader title={t('payslipDetailsTitle')} backHref='/home' />
      <IonContent fullscreen>
        <PayslipDetailsContainer payslipId={match.params.id} />
      </IonContent>
    </IonPage>
  );
}
