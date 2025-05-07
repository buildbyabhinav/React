import reactImg from "../assets/react-core-concepts.png"
const reactDescriptions = ['Fundamental', 'Core', 'Crucial']

function getRandom(max){ return Math.floor(Math.random()*max)}

function Header() {
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {reactDescriptions[getRandom(3)]} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

export default Header;