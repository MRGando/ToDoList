import React from "react";
import { GrTrash } from "react-icons/gr";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import arrow from "./Dependencies/arrow.svg";
function Content({ items, setItems }) {
  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      id === item.id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
    localStorage.setItem("toDoList", JSON.stringify(listItems));
  };

  const deleteItem = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
  };
  return (
    <>
      {items.length ? (
        <div className="content">
          {items.map((item) => (
            <div key={item.id} className="item">
              <div className="group">
                <input
                  type="checkbox"
                  onChange={() => handleCheck(item.id)}
                  checked={item.checked}
                />
                <div
                  onDoubleClick={() => handleCheck(item.id)}
                  className="itemInfo"
                >
                  <span
                    style={
                      item.checked
                        ? { textDecoration: "line-through", color: "#5a5a" }
                        : null
                    }
                    className="itemTitle"
                  >
                    {item.title.length >= 20
                      ? item.title.slice(0, 20) + "..."
                      : item.title}
                  </span>
                  <p
                    style={
                      item.checked
                        ? { textDecoration: "line-through", color: "#5a5a" }
                        : null
                    }
                    className="itemMessage"
                  >
                    {item.message.length >= 40
                      ? item.message.slice(0, 40) + "..."
                      : item.message}
                  </p>
                </div>
              </div>
              <GrTrash
                onClick={() => deleteItem(item.id)}
                style={{
                  fontSize: "22px",
                  color: "#680EF1",
                  cursor: "pointer",
                }}
              />
            </div>
          ))}
        </div>
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
