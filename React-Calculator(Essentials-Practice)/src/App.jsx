import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;

  function handleInputChange(eventIdentifier, newValue) {
    setUserInput((previousInput) => {
      return { ...previousInput, [eventIdentifier]: +newValue }; // addignplus forces conversion of string to number
    });
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} handleInputChange={handleInputChange} />
      {!inputIsValid && <p className="center">Please enter a duration greater than or equal to 1</p>}
      { inputIsValid && <Results input={userInput}/>}
    </>
  );
}

export default App;
