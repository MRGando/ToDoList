import React from "react";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import arrow from "./Dependencies/arrow.svg";
import Item from "./Item";
function Content({ items, setItems }) {
  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      id === item.id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
  };

  const deleteItem = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    localStorage.setItem("toDoList", JSON.stringify(listItems));
    setItems(listItems);
  };
  return (
    <>
      {items.length ? (
        <Item
          handleCheck={handleCheck}
          deleteItem={deleteItem}
          items={items}
          setItems={setItems}
        />
      ) : (
        <div
          className="emptyList"
          style={{ width: "100%", textAlign: "center", padding: "10px 0" }}
        >
          <span className="emptyLog">
            Click on <AiOutlineAppstoreAdd /> to add something :)
          </span>
          <img src={arrow} className="arrowSVG" alt="" srcset="" />
        </div>
      )}
    </>
  );
}

export default Content;
