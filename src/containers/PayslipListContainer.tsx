import { ComponentProps, FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { IonContent, IonInfiniteScroll, IonInfiniteScrollContent, IonList, IonLoading } from '@ionic/react';

import { PayslipListItem } from '../components/PayslipListItem';
import { getPayslipListPage, PayslipsReslut } from '../services/payslips';


export const PayslipListContainer: FC = () => {
  const { t } = useTranslation();

  const [payslips, setPayslips] = useState<PayslipsReslut>();

  useEffect(() => {
    getPayslipListPage().then((data) => {
      setPayslips(data);
    })
  }, [])

  if (!payslips) {
    return (
      <IonContent>
        <IonLoading message={t('loadingPayslips')} />
      </IonContent>
    )
  }

  const handleIonInfinite: ComponentProps<typeof IonInfiniteScroll>['onIonInfinite'] = (ev) => {
    getPayslipListPage(payslips.page + 1).then((data) => {
      setPayslips({
        ...data,
        items: [
          ...payslips.items,
          ...data.items,
        ],
      })
      ev.target.complete();
    })
  }

  return (
    <IonContent role="feed">
      <IonList>
        {payslips.items.map((item) => (
          <PayslipListItem
            key={item.id}
            payslip={item}
          />
        ))}
      </IonList>
      <IonInfiniteScroll
        disabled={payslips.page + 1 >= payslips.totalPages}
        onIonInfinite={handleIonInfinite}
      >
        <IonInfiniteScrollContent />
      </IonInfiniteScroll>
    </IonContent>
  );
}
