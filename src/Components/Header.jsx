import React from "react";
import { AiOutlineAppstoreAdd } from "react-icons/ai";

function Header({ items, setShow, nameData, genData }) {
  //variables
  let userFirstName = nameData ? nameData[0] : "you";
  let userLastName = nameData ? nameData[1] : " ";
  let userGender = genData === "female" ? "male" : "female";
  let Icon =
    userGender === "female"
      ? `https://avatars.dicebear.com/api/big-ears-neutral/female/${userFirstName}.svg`
      : `https://avatars.dicebear.com/api/big-ears-neutral/male/${userFirstName}.svg`;

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
