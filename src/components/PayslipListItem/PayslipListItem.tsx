import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { IonIcon, IonItem, IonLabel } from '@ionic/react';
import { reader } from 'ionicons/icons';
import { DateTime } from 'luxon';

import { Payslip } from '../../models/Payslip';

type PayslipListItemProps = {
  payslip: Payslip
}

export const PayslipListItem: FC<PayslipListItemProps> = ({ payslip }) => {
  const { t } = useTranslation();

  return (
    <IonItem role="article" href={`/payslip/${payslip.id}`}>
      <IonIcon slot='start' icon={reader} size="large" color="primary" aria-hidden="true"/>
      <IonLabel>
        <h3>
          <strong>{t('dateFrom')}</strong> {DateTime.fromJSDate(payslip.fromDate).toLocaleString(
            DateTime.DATE_FULL,
          )}
        </h3>
        <h3>
          <strong>{t('dateTo')}</strong> {DateTime.fromJSDate(payslip.toDate).toLocaleString(
            DateTime.DATE_FULL,
          )}
        </h3>
      </IonLabel>
    </IonItem>
  )
}