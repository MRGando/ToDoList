import React from "react";
import { HiViewGridAdd } from "react-icons/hi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { MdOutlineEditNote } from "react-icons/md";
import svg from "./Dependencies/addItemSvg.svg";
function addToDo({ setShow }) {
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
              <input type="text" name="" id="" />
              <br />
              <div className="addItem_secondField">
                <span className="addItem_span">Message: </span>
                <br />
                <input type="text" name="" id="" />
              </div>
            </div>
            <div className="addItem_buttons">
              <button>Add</button>
              <button>Clear</button>
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
