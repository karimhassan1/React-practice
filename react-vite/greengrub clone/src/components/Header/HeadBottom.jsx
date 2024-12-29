import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { HomeDropDownData } from "../constant/HomeData";
import DropDown from "../Share/DropDown";
const HeadBottom = () => {
  return (
    <div className="border-b-4 h-16 font-bold text-1xl hidden lg:block">
      <ul className="flex items-center justify-around h-full w-1/3 m-auto">
        <li className="relative">
          <Link
            to={"/"}
            onMouseEnter={() => {
              document.getElementById("homeDropDown").style.display = "block";
            }}
            onMouseLeave={() => {
              document.getElementById("homeDropDown").style.display = "none";
            }}
          >
            Home <FontAwesomeIcon icon={faAngleDown} />
          </Link>
          <DropDown data={HomeDropDownData} />
        </li>
        <li>
          <Link to={"/product"}>
            Product <FontAwesomeIcon icon={faAngleDown} />
          </Link>
        </li>
        <li>
          <Link to={"/collection"}>
            Collection <FontAwesomeIcon icon={faAngleDown} />{" "}
          </Link>
        </li>
        <li>
          Blogs <FontAwesomeIcon icon={faAngleDown} />
        </li>
        <li>
          Pages <FontAwesomeIcon icon={faAngleDown} />
        </li>
      </ul>
    </div>
  );
};

export default HeadBottom;
