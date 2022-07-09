import React from "react";
import { Group, FormInputLabel, Input } from "./form-input.styles.js";

function FormInput({ label, ...otherProps }) {
  return (
    <Group>
      {label && (
        <FormInputLabel shrink={otherProps.value.length}>
          {label}
        </FormInputLabel>
      )}
      <Input {...otherProps} />
    </Group>
  );
}

export default FormInput;
