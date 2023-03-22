import logo from "./logo.svg";
import "./App.css";

const number = 555;
const singers = [
  { name: "Dr Mahfuz", job: "Singer" },
  { name: "Eva Rahman", job: "Singer2" },
  { name: "Agun", job: "Sopno" },
  { name: "Shuvro", job: "Pathor" },
];

const singerStyle = {
  color: "purple",
  backgroundColor: "white",
};

function App() {
  const names = ["Rubel", "BappaDa", "Kuber", "Jashim", "Salman Shah", "Riyaz"];
  return (
    <div className="App">
      {names.map((name) => (
        <li>Name: {name}</li>
      ))}
      {singers.map((singer) => (
        <Person name={singer.name} job={singer.job}></Person>
      ))}
      {/* <Person name="Rubel" wife="shumi"></Person>
      <Person name="Raz" wife="cheka"></Person>
      <Person name="Kuber" wife="kopila"></Person> */}
      <h5>New component yay</h5>
      <p>rock mama React mama.</p>
      <Friend show="chuingam" phone="01777"></Friend>
      <Friend phone="01999"></Friend>
    </div>
  );
}

function Person(props) {
  return (
    <div className="person">
      <h1>{props.name}</h1>
      <p>Job: {props.job}</p>
    </div>
  );
}

function Friend(props) {
  return (
    <div className="container">
      <h3>Name: {props.show}</h3>
      <p>Phone: {props.phone}</p>
    </div>
  );
}

export default App;
