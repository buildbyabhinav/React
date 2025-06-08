import { useState } from "react";

import Input from "./Input";
import { isEmail, isNotEmpty, hasMinLength} from '../util/validation'
import { useInput } from "../hooks/useInput";

// ONLY THIS CAN BE USED AS VALIDATION ON EVERY KEY STROKE AS THIS IS STATE BASED WAY OF ACCESSING FORM DATA

export default function StateLogin() {

  const {value:emailValue, handleInputChange: handleEmailChange, handleInputBlur: handleEmailBlur, hasError} =useInput('', isEmail)
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [enteredPassword, setEnteredPassword] = useState("");
  // const [enteredValues, setEnteredValues] = useState({
  //   email: "",
  //   password: "",
  // });

  // const [didEdit, setDidEdit] = useState({
  //   email: false,
  //   password: false,
  // });

  // const emailIsInvalid = enteredValues.email !== '' && !enteredValues.email.includes("@");
  const emailIsInvalid = didEdit.email && !isEmail(enteredValues.email) && !isNotEmpty(enteredValues.email)
  // const passwordIsInvalid =
  //   didEdit.password && !enteredValues.password.trim().length < 6;
  const passwordIsInvalid =
    didEdit.password && !hasMinLength(enteredValues.password, 6)

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Submitted");
    setEnteredValues({
      email: "",
      password: "",
    });
  }

  // function handleInputBlur(identifier) {
  //   setDidEdit((prevEdit) => ({
  //     ...prevEdit,
  //     [identifier]: true,
  //   }));
  // }

  // function handleInputChange(identifier, event) {
  //   setEnteredValues((prevValues) => ({
  //     ...prevValues,
  //     [identifier]: event.target.value,
  //   }));
  //   setDidEdit((prevEdit) => ({
  //     ...prevEdit,
  //     [identifier]: false,
  //   }));
  // }
  // function handleEmailChange(event) {
  //   setEnteredEmail(event.target.value);
  // }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Email"
          id="email"
          type="email"
          name="email"
          // onBlur={() => handleInputBlur("email")}
          onBlur = {handleEmailBlur}
          // onChange={(event) => handleInputChange("email", event.target.value)}
          onChange = {handleEmailChange} // not passed as a function because we are reusing a piece of hook and we are using it for a single thing rather than 2 things so that we need an identifier
          // value={enteredValues.email}
          value={emailValue}
          error={emailIsInvalid && "Please enter a valid email!"}
        />

        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          onChange={(event) =>
            handleInputChange("password", event.target.value)
          }
          onBlur={() => handleInputBlur("password")}
          value={enteredValues.password}
          error={passwordIsInvalid && "Please enter a valid password!"}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
