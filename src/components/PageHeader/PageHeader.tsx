import { ComponentProps, FC } from 'react';
import { IonBackButton, IonButtons, IonHeader, IonTitle, IonToolbar } from '@ionic/react';

type PageHeaderProps = {
  title: string;
  backHref?: string;
  fullscreen?: boolean;
}

export const PageHeader: FC<PageHeaderProps> = ({ title, backHref, fullscreen }) => {
  let headerProps: ComponentProps<typeof IonHeader> = {}

  if (fullscreen) {
    headerProps = {
      ...headerProps,
      collapse: 'condense',
    }
  }

  if (backHref) {
    headerProps = {
      ...headerProps,
      translucent: true,
    }
  }

  const titleProps: ComponentProps<typeof IonTitle> = fullscreen ? {
    size: 'large',
  } : {};

  return (
    <IonHeader {...headerProps}>
      <IonToolbar>
        {backHref !== undefined ? (
          <IonButtons slot="start">
            <IonBackButton text={title} defaultHref={backHref}></IonBackButton>
          </IonButtons>
        ) : (
          <IonTitle {...titleProps}>{title}</IonTitle>
        )}
      </IonToolbar>
    </IonHeader>
  );
}