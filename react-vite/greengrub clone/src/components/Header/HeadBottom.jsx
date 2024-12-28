import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
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
            <div
              id="homeDropDown"
              className="absolute top-10  border bg-white w-52 hidden"
            >
              <ul>
                <Link>
                  <li className="border-b-2 p-2">Home 1-Super Market</li>{" "}
                </Link>
                <Link>
                  <li className="border-b-2 p-2">Home 2 </li>
                </Link>
                <Link>
                  <li className="border-b-2 p-2">Home 3-</li>
                </Link>
                <Link>
                  <li className="border-b-2 p-2">Home 4-</li>
                </Link>
                <Link>
                  <li className="border-b-2 p-2">Home 5-</li>
                </Link>
                <Link>
                  <li className="border-b-2 p-2">Home 6-</li>
                </Link>
                <Link>
                  <li className="border-b-2 p-2">Home 7-</li>
                </Link>
                <Link>
                  <li className="border-b-2 p-2">Home 8-</li>
                </Link>
              </ul>
            </div>
          </Link>
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
