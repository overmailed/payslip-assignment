import { FC } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { Capacitor } from '@capacitor/core';
import { getPlatforms, IonApp, IonRouterOutlet, isPlatform, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import './i18n';

import { HomePage } from './pages/Home';
import { PayslipDetailsPage } from './pages/PayslipDetails/PayslipDetails';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';
/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
/* Theme variables */
import './theme/variables.css';
import './App.css';

setupIonicReact({
  rippleEffect: Capacitor.isNativePlatform() || !isPlatform('desktop'),
});

const App: FC = () => {
  const platformClasses = getPlatforms().map((item) => `platform-${item ?? 'undefined'}`).join(' ');

  return (
    <IonApp className={platformClasses}>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route exact path="/home" component={HomePage} />
          <Route path="/payslip/:id" component={PayslipDetailsPage} />
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
