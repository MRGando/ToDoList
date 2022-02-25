import { useState } from "react";
import Header from "./Components/Header";
import Content from "./Components/Content";
import Footer from "./Components/Footer";
import ModelOne from "./Components/Dependencies/model.svg";
import ModelTwo from "./Components/Dependencies/model2.svg";
import AddToDo from "./Components/addToDo";
import { AiOutlineSetting } from "react-icons/ai";
let audio = new Audio("./Dependencies/sound.wav");
function App() {
  //Variables
  audio.play();
  let Title = "";
  let Message = "";

  const ex =
    JSON.parse(localStorage.getItem("toDoList")) === null
      ? []
      : JSON.parse(localStorage.getItem("toDoList"));
  const [items, setItems] = useState([...ex]);
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);
  const nameData = [
    JSON.parse(localStorage.getItem("firstName")),
    JSON.parse(localStorage.getItem("lastName")),
  ];
  //functionalities
  const setting = () => {
    const fisrtName = prompt("What's your first name? ex: john");
    const lastName = prompt("What's your last name? ex: duo");
    localStorage.setItem("firstName", JSON.stringify(fisrtName));
    localStorage.setItem("lastName", JSON.stringify(lastName));
    window.location.reload(true);
  };
  return (
    <div className="App">
      <div className="setting_section" onClick={setting}>
        <span>Your info</span>
        <AiOutlineSetting className="setting_icon" />
      </div>
      <img className="SVG_Right SVG" width={300} src={ModelOne} alt="" />
      <div className="Container">
        <Header items={items} setShow={setShow} nameData={nameData} />
        <Content items={items} setItems={setItems} />
        <Footer />
      </div>
      <img className="SVG_Left SVG" width={300} src={ModelTwo} alt="" />
      <div className="secret">
        <p>Device screen is too small :(</p>
      </div>
      {show ? (
        <AddToDo
          setShow={setShow}
          setItems={setItems}
          items={items}
          error={error}
          setError={setError}
          Title={Title}
          Message={Message}
        />
      ) : null}
    </div>
  );
}

export default App;
