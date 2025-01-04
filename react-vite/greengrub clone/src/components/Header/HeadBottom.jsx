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
const HeadBottom = () => {
  const [homeShow, setHomeShow] = useState(false);
  const [productShow, setProductShow] = useState(false);
  const [collectionShow, setCollectionShow] = useState(false);
  const [pageShow, setPageShow] = useState(false);
  const [blogShow, setBlogShow] = useState(false);
  return (
    <div className="border-b-4 h-16 font-bold text-1xl hidden lg:block text-fo relative">
      <ul className="flex items-center justify-around h-full w-2/5 m-auto">
        <li
          className="relative"
          onMouseEnter={() => {
            setHomeShow(true);
          }}
          onMouseLeave={() => {
            setHomeShow(false);
          }}
        >
          <Link to={"/"}>
            Home <FontAwesomeIcon icon={faAngleDown} />
          </Link>
          {homeShow ? (
            <DropDown data={HomeDropDownData} id="homeDropDown" />
          ) : null}
        </li>
        <li
          onMouseEnter={() => {
            setProductShow(true);
          }}
          onMouseLeave={() => {
            setProductShow(false);
          }}
        >
          <Link>
            Product <FontAwesomeIcon icon={faAngleDown} />
          </Link>
          {productShow ? <MegaMenu id="megaMenuProduct" /> : null}
        </li>
        <li
          onMouseEnter={() => {
            setCollectionShow(true);
          }}
          onMouseLeave={() => {
            setCollectionShow(false);
          }}
        >
          <Link to={"/collection"}>
            Collection <FontAwesomeIcon icon={faAngleDown} />{" "}
          </Link>
          {collectionShow ? <MegaMenu id="megaMenuCollection" /> : null}
        </li>
        <li
          className="relative"
          onMouseEnter={() => {
            setBlogShow(true);
          }}
          onMouseLeave={() => {
            setBlogShow(false);
          }}
        >
          <Link>
            Blogs <FontAwesomeIcon icon={faAngleDown} />
          </Link>
          {blogShow ? (
            <DropDown data={BlogDropDownData} id="blogDropDown" />
          ) : null}
        </li>
        <li
          className="relative"
          onMouseEnter={() => {
            setPageShow(true);
          }}
          onMouseLeave={() => {
            setPageShow(false);
          }}
        >
          <Link>
            Pages <FontAwesomeIcon icon={faAngleDown} />
          </Link>
          {pageShow ? (
            <DropDown data={pagesDropDownData} id="pagesDropDown" />
          ) : null}
        </li>
        <li>
          <Link to={"/Github"}>GitHub</Link>
        </li>
      </ul>
    </div>
  );
};

export default HeadBottom;
