import React from "react";
import { HiViewGridAdd } from "react-icons/hi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import svg from "./Dependencies/addItemSvg.svg";
function addToDo({ setShow, setItems, items }) {
  let Title;
  let Message;
  const putTitle = (e) => {
    Title = e.target.value;
  };
  const putMessage = (e) => {
    Message = e.target.value;
  };

  // this should add item to items in Content Component
  const addItem = () => {
    const listItems = [
      ...items,
      { id: items.length + 1, title: Title, message: Message },
    ];
    setItems(listItems);
    setShow(false);
  };
  const clearVariables = (e) => {
    e.target.value = "";
  };
  return (
    <div className="transparent_Background">
      <div className="addItem_Screen">
        <div className="addItem_Header">
          <p>
            <HiViewGridAdd className="icon" /> Add To Do
          </p>
          <AiOutlineCloseCircle
            onClick={() => setShow(false)}
            className="closeItemButton"
          />
        </div>
        <div className="addItem_Container">
          <div className="addItem_inputs">
            <div className="addItem_fields">
              <span className="addItem_span">Title: </span>
              <br />
              <input
                onChange={putTitle}
                onDoubleClick={() => clearVariables()}
                type="text"
                name=""
                id=""
              />
              <br />
              <div className="addItem_secondField">
                <span className="addItem_span">Message: </span>
                <br />
                <input onChange={putMessage} type="text" name="" id="" />
              </div>
            </div>
            <div className="addItem_buttons">
              <button onClick={addItem}>Add</button>
            </div>
          </div>
          <div className="addItem_svg">
            <img src={svg} width={120} alt="" srcset="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default addToDo;
