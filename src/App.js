import { useState } from "react";
import Header from "./Components/Header";
import Content from "./Components/Content";
import Footer from "./Components/Footer";
import ModelOne from "./Components/Dependencies/model.svg";
import ModelTwo from "./Components/Dependencies/model2.svg";
import AddToDo from "./Components/addToDo";

function App() {
  const [show, setShow] = useState(false);
  const [items, setItems] = useState([
    { id: 1, title: "feed the birds", message: "it's time to feed the birds" },
    {
      id: 2,
      title: "visit ali",
      message:
        "don't forget to call ali because he called you last night and asked for something",
    },
    { id: 3, title: "water plants", message: "it's time to feed the birds" },
    { id: 4, title: "call docter", message: "it's time to feed the birds" },
    {
      id: 5,
      title: "gift for birthday",
      message: "it's time to feed the birds",
    },
    {
      id: 6,
      title: "gift for birthday",
      message: "it's time to feed the birds",
    },
  ]);
  return (
    <div className="App">
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
      {show ? <AddToDo setShow={setShow} /> : null}
    </div>
  );
}

export default App;
