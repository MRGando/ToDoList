import React from "react";
import { GrTrash } from "react-icons/gr";
function Item({ handleCheck, deleteItem, items }) {
  return (
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
                {item.title.length >= 25
                  ? item.title.slice(0, 25) + "..."
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
                {item.message.length >= 45
                  ? item.message.slice(0, 45) + "..."
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
  );
}

export default Item;
