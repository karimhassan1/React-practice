import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
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
      className="border-b-2 p-3 lg:border-b-0 "
      onMouseEnter={() => {
        isShow(true);
      }}
      onMouseLeave={() => {
        isShow(false);
      }}
    >
      <Link to={"/"} className="lg:border-b-2 lg:ps-2 lg:be-2">
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
    <div
      id="mobile-nav"
      className="border-b-4 bg-white lg:h-16 font-bold text-1xl hidden lg:block absolute top-0 left-0 w-60  lg:w-full h-full lg:relative"
    >
      <ul className="flex flex-col lg:flex-row lg:items-center justify-around lg:h-full lg:w-4/5 lg:m-auto">
        <li className="ms-5 mt-2 lg:hidden">
          <button
            onClick={() => {
              document.getElementById("mobile-nav").classList.add("hidden");
            }}
          >
            <FontAwesomeIcon icon={faArrowLeft} size="xl" />
          </button>
        </li>
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

        <li className="me-3 border-b-2 p-3 lg:border-b-0">
          <Link to={"/Github"} className="lg:border-b-2 lg:ps-2 lg:be-2">
            My GitHub
          </Link>
        </li>
        <li className="border-b-2 p-3 lg:border-b-0">
          <Link to={"/occodion"} className="lg:border-b-2 lg:ps-2 lg:be-2">
            Occodion
          </Link>
        </li>
        <li className="border-b-2 p-3 lg:border-b-0">
          <Link to={"/context"} className="lg:border-b-2 lg:ps-2 lg:be-2">
            Context
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default HeadBottom;
