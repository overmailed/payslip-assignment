import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { IonIcon, IonItem, IonLabel } from '@ionic/react';
import { reader } from 'ionicons/icons';

import { Payslip } from '../../models/Payslip';
import { formatDate } from '../../utils/common';

type PayslipListItemProps = {
  payslip: Payslip
}

export const PayslipListItem: FC<PayslipListItemProps> = ({ payslip }) => {
  const { t } = useTranslation();

  return (
    <IonItem role="article" routerLink={`/payslip/${payslip.id}`}>
      <IonIcon slot='start' icon={reader} size="large" color="primary" aria-hidden="true"/>
      <IonLabel>
        <h3>
          <strong>{t('dateFrom')}</strong> {formatDate(payslip.fromDate)}
        </h3>
        <h3>
          <strong>{t('dateTo')}</strong> {formatDate(payslip.toDate)}
        </h3>
      </IonLabel>
    </IonItem>
  )
}