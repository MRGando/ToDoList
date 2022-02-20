import React from "react";
import { HiViewGridAdd } from "react-icons/hi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import svg from "./Dependencies/addItemSvg.svg";
import { AiOutlineMinus } from "react-icons/ai";
import { BiError } from "react-icons/bi";
function addToDo({ setShow, setItems, items, error, setError, Title, Message }) {
  //variables

  const defualtValue = <AiOutlineMinus />;
  //functionalitis
  const putTitle = (e) => {
    Title = e.target.value;
  };
  const putMessage = (e) => {
    Message = e.target.value;
  };
  const _add_Functionality = () => {
    const listItems = [
      ...items,
      { id: items.length + 1, title: Title, message: Message },
    ];
    setItems(listItems);
    setShow(false);
    setError(false);
  };
  // this should add item to items in Content Component
  const addItem = () => {
    if (Title !== "" && Message !== "") {
      _add_Functionality();
    } else if (Title === "" && Message !== "") {
      Title = defualtValue;
      _add_Functionality();
    } else if (Message === "" && Title !== "") {
      Message = defualtValue;
      _add_Functionality();
    } else if (Title === "" && Message === "") {
      setError(true);
    }
  };

  //interface
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
              <input onChange={putTitle} type="text" name="" id="" />
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
            {error ? (
              <span
                style={{
                  color: "#d4ff00",
                  fontSize: "15px",
                  fontWeight: "bold",
                }}
              >
                <BiError style={{ fontSize: "25px", marginBottom: "-5px" }} />
                Type something as title or message.
              </span>
            ) : null}
          </div>
          <div className="addItem_svg">
            <img className="numb" src={svg} width={120} alt="" srcset="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default addToDo;
