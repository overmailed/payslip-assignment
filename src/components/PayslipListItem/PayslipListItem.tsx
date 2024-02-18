import { FC } from 'react';
import { IonIcon, IonItem, IonLabel } from '@ionic/react';
import { reader } from 'ionicons/icons';

import { Payslip } from '../../models/Payslip';

type PayslipListItemProps = {
  payslip: Payslip
}

export const PayslipListItem: FC<PayslipListItemProps> = ({ payslip }) => {
  return (
      <IonItem role="article">
        <IonIcon icon={reader} size="large" color="primary" aria-hidden="true"/>
        <IonLabel>{payslip.id}</IonLabel>
      </IonItem>
  )
}