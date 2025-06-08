import { useState } from "react";

export function useInput(defaultValue, validateFunction) {
  const [enteredValue, setEnteredValue] = useState(defaultValue);
  const [didEdit, setDidEdit] = useState();

  const valueIsValid = validateFunction(enteredValue)

  function handleInputChange(event) {
    setEnteredValue(event.target.value);
    setDidEdit(false);
  }

  function handleInputBlur(event) {
    setDidEdit(true);
  }

  return {
    value: enteredValue,
    handleInputBlur,
    handleInputChange,
    hasError: didEdit && !valueIsValid
  };
}
