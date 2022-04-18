import { useFormInput } from "./utils";

export const useSignupFields = () => {
  return [
    {
      id: "name",
      label: "Name",
      required: true,
      input: {
        props: {
          type: "text",
          placeholder: "Joe Bloggs"
        },
        state: useFormInput("")
      }
    },
    {
      id: "email",
      label: "Email",
      required: true,
      input: {
        props: {
          type: "email",
          placeholder: "jhonDoe@gmail.com"
        },
        state: useFormInput("")
      }
    },
    {
      id: "senha",
      label: "Senha",
      required: true,
      input: {
        props: {
          type: "senha",
          placeholder: "*********"
        },
        state: useFormInput("")
      }
    }
  ];
};

export const useLoginFields = () => {
  return [
    {
      id: "email",
      label: "Email",
      required: true,
      input: {
        props: {
          type: "email",
          placeholder: "jhondoe@gmail.com"
        },
        state: useFormInput("")
      }
    },
    {
      id: "senha",
      label: "Senha",
      required: true,
      input: {
        props: {
          type: "senha",
          placeholder: "*******"
        },
        state: useFormInput("")
      }
    }
  ];
};
