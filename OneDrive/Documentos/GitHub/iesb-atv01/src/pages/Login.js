import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCardTitle,
  IonCol,
  IonContent,
  IonFooter,
  IonGrid,
  IonHeader,
  IonIcon,
  IonPage,
  IonRow,
  IonToolbar
} from "@ionic/react";
import styles from "./Login.module.scss";

import { arrowBack, shapesOutline } from "ionicons/icons";
import CustomField from "../components/CustomField";
import { useLoginFields } from "../data/fields";
import { Action } from "../components/Action";
import { useEffect, useState } from "react";
import { validateForm } from "../data/utils";
import { useParams } from "react-router";

const Login = () => {
  const params = useParams();
  const fields = useLoginFields();
  const [errors, setErrors] = useState(false);

  const login = () => {
    const errors = validateForm(fields);
    setErrors(errors);

    if (!errors.length) {
      //  Submit your form here
    }
  };

  useEffect(() => {
    return () => {
      fields.forEach((field) => field.input.state.reset(""));
      setErrors(false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);

  return (
    <IonPage className={styles.loginPage}>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton icon={arrowBack} text="" className="custom-back" />
          </IonButtons>

          <IonButtons slot="end">
            <IonButton className="custom-button">
              <IonIcon icon={shapesOutline} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonGrid className="ion-padding">
          <IonRow>
            <IonCol size="12" className={styles.headingText}>
              <IonCardTitle
                style={{
                  textAlign: "center",
                  display: "flex",
                  justifyContent: "center"
                }}
              >
                Log in
              </IonCardTitle>
              <h5
                style={{
                  justifyContent: "center",
                  textAlign: "center",
                  display: "flex"
                }}
              >
                Bem vindo
              </h5>
            </IonCol>
          </IonRow>

          <IonRow className="ion-margin-top ion-padding-top">
            <IonCol size="12">
              {fields.map((field) => {
                return <CustomField field={field} errors={errors} />;
              })}

              <IonButton
                className="custom-button"
                expand="block"
                onClick={login}
              >
                Login
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>

      <IonFooter>
        <IonGrid className="ion-no-margin ion-no-padding">
          <Action message="Não tem conta?" text="Registrar" link="/signup" />
        </IonGrid>
      </IonFooter>
    </IonPage>
  );
};

export default Login;
