import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonIcon } from '@ionic/react';
import { downloadOutline } from 'ionicons/icons';

import { Payslip } from '../../models';
import { formatDateShort } from '../../utils/common';

import styles from './PayslipDetails.module.css';

type PayslipDetailsProps = {
  payslip: Payslip;
}

export const PayslipDetails: FC<PayslipDetailsProps> = ({ payslip }) => {
  const { t } = useTranslation();

  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>
          {t('payslipItem')}
        </IonCardTitle>
        <IonCardSubtitle>
          {t('payslipId')} <span className={styles.idValue}>{payslip.id}</span>
        </IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>
        {t('period')} {formatDateShort(payslip.fromDate)}&nbsp;–&nbsp;{formatDateShort(payslip.toDate)}
      </IonCardContent>

      <div className={styles.dlIconSection}>
        <IonButton fill="clear">
          <IonIcon slot="icon-only" icon={downloadOutline} color="primary" className={styles.dlIconSection__Icon} aria-label={t('download')} />
        </IonButton>
      </div>
    </IonCard>
  )
}