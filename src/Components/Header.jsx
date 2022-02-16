import React from "react";
import Face from "./Dependencies/face.jpg";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import AddToDo from "./addToDo.jsx";
function Header({ items, setShow }) {
  const addItem = () => {};
  return (
    <header>
      <div className="profile">
        <img className="profilePhoto" src={Face} width={50} />
        <span>Martin G.</span>
        <div className="status">{items.length}</div>
      </div>
      <AiOutlineAppstoreAdd
        onClick={() => setShow(true)}
        className="addItemButton"
      />
    </header>
  );
}

export default Header;
