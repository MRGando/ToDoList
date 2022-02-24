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
                className="itemTitle itemText"
              >
                {item.title.length >= 100
                  ? item.title.slice(0, 90) + " ..."
                  : item.title}
              </span>
              {item.message ? (
                <p
                  style={
                    item.checked
                      ? { textDecoration: "line-through", color: "#5a5a" }
                      : null
                  }
                  className="itemMessage itemText"
                >
                  {item.message.length >= 100
                    ? item.message.slice(0, 90) + " ..."
                    : item.message}
                </p>
              ) : null}
            </div>
          </div>
          <GrTrash
            className="trashBinIcon"
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
