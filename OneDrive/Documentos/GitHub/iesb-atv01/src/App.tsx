import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { ellipse } from "ionicons/icons";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import ListItems from "./pages/ListItems";

import { defineCustomElements } from "@ionic/pwa-elements/loader";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

setupIonicReact();
defineCustomElements(window);

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>
          <Route path="/listItems">
            <ListItems />
          </Route>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" href="/login">
            <IonIcon icon={ellipse} />
            <IonLabel>Login</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/signup">
            <IonIcon icon={ellipse} />
            <IonLabel>Registrar</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/listItems">
            <IonIcon icon={ellipse} />
            <IonLabel>Listagem</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
