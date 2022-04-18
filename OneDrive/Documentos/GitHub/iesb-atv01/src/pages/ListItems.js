import {
  IonButton,
  IonCardTitle,
  IonCol,
  IonContent,
  IonFooter,
  IonGrid,
  IonHeader,
  IonPage,
  IonRouterLink,
  IonRow
} from "@ionic/react";
import { useEffect, useState } from "react";
import { Action } from "../components/Action";
import styles from "./ListItems.module.scss";

const ListItems = () => {
  const [campeonato, setCampeonato] = useState([]);

  useEffect(() => {
    fetch("https://api.api-futebol.com.br/v1/campeonatos", {
      method: "GET",
      headers: {
        Authorization: "Bearer test_ba8597de5edcf59eed7df197ce04d8"
      }
    })
      .then((response) => {
        console.log(response);
        setCampeonato(response.json());
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <IonPage className={styles.homePage}>
      <IonHeader>
        {/* <IonToolbar className="ion-no-margin ion-no-padding"> */}
        {/* <IonImg src="/assets/login2.jpeg" /> */}
        {/* </IonToolbar> */}
      </IonHeader>
      <IonContent fullscreen>
        <div className={styles.getStarted}>
          <IonGrid>
            <IonRow
              className={`ion-text-center ion-justify-content-center ${styles.heading}`}
            >
              <IonCol size="11" className={styles.headingText}>
                <IonCardTitle>
                  Join millions of other people discovering their creative side
                </IonCardTitle>
              </IonCol>
            </IonRow>
            <>{campeonato.map((item) => alert(item))}</>

            <IonRow className={`ion-text-center ion-justify-content-center`}>
              <IonRouterLink routerLink="/signup" className="custom-link">
                <IonCol size="11">
                  <IonButton
                    className={`${styles.getStartedButton} custom-button`}
                  >
                    Get started &rarr;
                  </IonButton>
                </IonCol>
              </IonRouterLink>
            </IonRow>
          </IonGrid>
        </div>
      </IonContent>

      <IonFooter>
        <IonGrid>
          <Action
            message="Already got an account?"
            text="Login"
            link="/login"
          />
        </IonGrid>
      </IonFooter>
    </IonPage>
  );
};

export default ListItems;
