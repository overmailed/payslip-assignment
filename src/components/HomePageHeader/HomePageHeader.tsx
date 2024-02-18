import { ComponentProps, FC } from 'react';
import { useTranslation } from 'react-i18next';
import { IonHeader, IonTitle, IonToolbar } from '@ionic/react';

type HomePageHeaderProps = {
  fullscreen?: boolean;
}

export const HomePageHeader: FC<HomePageHeaderProps> = ({ fullscreen }) => {
  const { t } = useTranslation();

  const headerProps: ComponentProps<typeof IonHeader> = fullscreen ? {
    collapse: 'condense',
  } : {};

  const titleProps: ComponentProps<typeof IonTitle> = fullscreen ? {
    size: 'large',
  } : {};

  return (
    <IonHeader {...headerProps}>
      <IonToolbar>
        <IonTitle {...titleProps}>{t('homeTitle')}</IonTitle>
      </IonToolbar>
    </IonHeader>
  );
}