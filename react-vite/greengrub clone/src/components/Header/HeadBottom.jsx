import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import {
  HomeDropDownData,
  BlogDropDownData,
  pagesDropDownData,
} from "../constant/HomeData";

import MegaMenu from "../Share/megaMenu";
import DropDown from "../Share/DropDown";
import { useState } from "react";
const NavItem = ({ navItemText, data1, dropDownOrMega }) => {
  const [show, isShow] = useState(false);
  return (
    <li
      className=""
      onMouseEnter={() => {
        isShow(true);
      }}
      onMouseLeave={() => {
        isShow(false);
      }}
    >
      <Link to={"/"}>
        {navItemText} <FontAwesomeIcon icon={faAngleDown} />
      </Link>

      {dropDownOrMega ? (
        show ? (
          <DropDown data={data1} id="homeDropDown" />
        ) : null
      ) : show ? (
        <MegaMenu />
      ) : null}
    </li>
  );
};
const HeadBottom = () => {
  return (
    <div className="border-b-4 h-16 font-bold text-1xl hidden lg:block text-fo relative">
      <ul className="flex items-center justify-around h-full w-2/5 m-auto">
        <NavItem
          navItemText={"Home"}
          data1={HomeDropDownData}
          dropDownOrMega={true}
        />
        <NavItem navItemText={"Product"} dropDownOrMega={false} />
        <NavItem navItemText={"Collection"} dropDownOrMega={false} />
        <NavItem
          navItemText={"Blog"}
          data1={BlogDropDownData}
          dropDownOrMega={true}
        />
        <NavItem
          navItemText={"Pages"}
          data1={pagesDropDownData}
          dropDownOrMega={true}
        />
        {
          <li>
            <Link to={"/Github"}>My GitHub</Link>
          </li>
        }
      </ul>
    </div>
  );
};

export default HeadBottom;
