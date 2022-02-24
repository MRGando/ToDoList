import React from "react";
import { AiOutlineAppstoreAdd } from "react-icons/ai";

function Header({ items, setShow, nameData }) {
  //variables
  let userFirstName = nameData ? nameData[0] : "you";
  let userLastName = nameData[1] ? nameData[1] : " ";
  let Icon = `https://avatars.dicebear.com/api/big-ears-neutral/${userFirstName}.svg`;

  //functionalities
  const _generate_full_name = () => {
    const first = userFirstName[0].toUpperCase() + userFirstName.slice(1);
    const last = userLastName[0].toUpperCase() + ".";
    return first + " " + last;
  };
  return (
    <header>
      <div className="profile">
        <img className="profilePhoto" src={Icon} width={50} />
        <span>{_generate_full_name()}</span>
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
