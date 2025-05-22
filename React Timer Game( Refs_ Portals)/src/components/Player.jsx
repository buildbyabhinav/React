import { useState, useRef } from "react";

export default function Player() {
  const playerNameRef = useRef();
  const [enteredPlayerName, setEnteredPlayerName] = useState(null);
  // const [submitted, setSubmitted] = useState(false)

  // function handleChange(event){
  //   setSubmitted(false)
  //   setEnteredPlayerName(event.target.value)
  // }

  function handleClick() {
    // setSubmitted(true)
    setEnteredPlayerName(playerNameRef.current.value);
    playerNameRef.current.value = ''; //this is writing imperative code i.e. directly manipulating the dom which is not good every time
  }
  return (
    <section id="player">
      {/* <h2>Welcome {submitted ? enteredPlayerName: 'unknown entity'}</h2> */}
      <h2>
        Welcome {enteredPlayerName? enteredPlayerName: "unknown entity"}
      </h2>

      <p>
        <input
          ref={playerNameRef}
          type="text"
          // onChange={handleChange}
          // value={enteredPlayerName}
        />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
