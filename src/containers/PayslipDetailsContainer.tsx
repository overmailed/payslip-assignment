import { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { IonContent, IonLoading } from '@ionic/react';

import { ErrorCard } from '../components/ErrorCard/ErrorCard';
import { PayslipDetails } from '../components/PayslipDetails/PayslipDetails';
import { Payslip } from '../models';
import { getPayslipById } from '../services/payslips';


type PayslipDetailsContainerProps = {
  payslipId: string;
};

export const PayslipDetailsContainer: FC<PayslipDetailsContainerProps> = ({ payslipId }) => {
  const { t } = useTranslation();

  const [payslip, setPayslip] = useState<Payslip>();
  const [isError, setIsError] = useState<boolean>();

  useEffect(() => {
    if (payslipId) {
      getPayslipById(payslipId)
        .then((data) => {
          setPayslip(data);
        })
        .catch(() => {
          setIsError(true);
        })
    }
  }, [payslipId]);


  if (isError) {
    return (
      <IonContent>
        <ErrorCard errorText={t('loadingPayslipItemErrorText')} />
      </IonContent>
    )
  } else if (!payslip) {
    return (
      <IonContent>
        <IonLoading message={t('loadingPayslipDetails')} />
      </IonContent>
    )
  } else {
    return (
      <IonContent>
        <PayslipDetails payslip={payslip} />
      </IonContent>
    )
  }
}
