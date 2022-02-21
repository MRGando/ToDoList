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
  const ex = JSON.parse(localStorage.getItem("toDoList"));
  console.log(ex);
  const [items, setItems] = useState(ex);
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);
  return (
    <div className="App">
      <AiOutlineSetting className="setting_icon" />
      <img className="SVG_Right SVG" width={300} src={ModelOne} alt="" />
      <div className="Container">
        <Header items={items} setShow={setShow} />
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
