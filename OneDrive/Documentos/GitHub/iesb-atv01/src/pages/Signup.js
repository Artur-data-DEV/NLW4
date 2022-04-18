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
import styles from "./Signup.module.scss";

import { arrowBack, shapesOutline } from "ionicons/icons";
import CustomField from "../components/CustomField";
import { useSignupFields } from "../data/fields";
import { Action } from "../components/Action";
import { useEffect, useState } from "react";
import { validateForm } from "../data/utils";
import { useParams } from "react-router";

const Signup = () => {
  const params = useParams();
  const fields = useSignupFields();
  const [errors, setErrors] = useState(false);

  const createAccount = () => {
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
    <IonPage className={styles.signupPage}>
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
                Registrar
              </IonCardTitle>
              <h5
                style={{
                  textAlign: "center",
                  display: "flex",
                  justifyContent: "center"
                }}
              >
                Cadastre-se e venha fazer parte dessa revolução!
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
                onClick={createAccount}
              >
                Create account
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>

      <IonFooter>
        <IonGrid className="ion-no-margin ion-no-padding">
          <Action
            message="Já tem conta? Fazer"
            text="login"
            link="/login"
          />
        </IonGrid>
      </IonFooter>
    </IonPage>
  );
};

export default Signup;
