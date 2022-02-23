import { useState } from "react";
import Header from "./Components/Header";
import Content from "./Components/Content";
import Footer from "./Components/Footer";
import ModelOne from "./Components/Dependencies/model.svg";
import ModelTwo from "./Components/Dependencies/model2.svg";
import AddToDo from "./Components/addToDo";
import { AiOutlineSetting } from "react-icons/ai";

function App() {
  //Variables
  let Title = "";
  let Message = "";

  const ex =
    JSON.parse(localStorage.getItem("toDoList")) === null
      ? []
      : JSON.parse(localStorage.getItem("toDoList"));
  const [items, setItems] = useState([...ex]);
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);
  const nameData = JSON.parse(localStorage.getItem("fullName"));
  const genData = JSON.parse(localStorage.getItem("gender"));
  //functionalities
  const setting = () => {
    const fullName = prompt(
      "What's your name?",
      "Type your full name ..."
    ).split(" ");
    const user_gender = prompt("Female or Male ?", "male , female ...");
    localStorage.setItem("fullName", JSON.stringify(fullName));
    localStorage.setItem("gender", JSON.stringify(user_gender));
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
        <Header
          items={items}
          setShow={setShow}
          nameData={nameData}
          genData={genData}
        />
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
