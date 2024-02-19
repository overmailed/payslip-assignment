import { ComponentProps, FC } from 'react';
import { IonBackButton, IonButtons, IonHeader, IonTitle, IonToolbar, isPlatform } from '@ionic/react';

import styles from './PageHeader.module.css';

type PageHeaderProps = {
  title: string;
  backHref?: string;
  fullscreen?: boolean;
}

export const PageHeader: FC<PageHeaderProps> = ({ title, backHref, fullscreen }) => {
  const isDesktopBrowser = isPlatform('desktop');

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
          <>
            <IonButtons slot="start">
              <IonBackButton text={!isDesktopBrowser ? title : undefined} defaultHref={backHref}></IonBackButton>
            </IonButtons>
            {isDesktopBrowser ? (
              <IonTitle {...titleProps} className={styles.headerTitle}>{title}</IonTitle>
            ) : null}
          </>
        ) : (
            <IonTitle {...titleProps} className={isDesktopBrowser ? styles.headerTitle : ''}>{title}</IonTitle>
        )}
      </IonToolbar>
    </IonHeader>
  );
}