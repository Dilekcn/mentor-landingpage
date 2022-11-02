import { FormControl } from "@chakra-ui/react";
import {
  GoogleFormProvider,
  useGoogleForm,
  useShortAnswerInput,
} from "react-google-forms-hooks";

import form from "./form.json";

export default function ShortAnswerInput({ id }) {
  const { register, label } = useShortAnswerInput(id);

  return (
    <div>
      <p>{label}</p>
      <input type="text" {...register()} />
    </div>
  );
}

const LinkForm = () => {
  const methods = useGoogleForm({ form });
  const onSubmit = async (data) => {
    await methods.submitToGoogleForms(data);
  };

  return (
    <GoogleFormProvider {...methods}>
      <FormControl onSubmit={methods.handleSubmit(onSubmit)}>
        <ShortAnswerInput id="1864908950" />
        <button type="submit">Submit</button>
      </FormControl>
    </GoogleFormProvider>
  );
};

export default LinkForm;
