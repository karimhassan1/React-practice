import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useContext } from "react";
import {
  faAngleRight,
  faAngleLeft,
  faAngleDown,
  faHandPointRight,
} from "@fortawesome/free-solid-svg-icons";
import userContext from "../Share/userContext";

let TitleArr = [
  "Get $50 Gift card on a purchase of $ 1000",
  "For free shipping purchase only $50",
  "Use discount code GREENGRUB001 get 5% off",
];
const HeadTop = () => {
  let [headCountArr, setHeadCountArr] = useState(0);
  let [headCountNum, setHeadCountNum] = useState(3000);
  const { user } = useContext(userContext);
  return (
    <>
      <div className="w-full bg-primary h-12 flex justify-center items-center text-white">
        <div className="hidden sm:hidden lg:w-1/4 lg:block">
          Need help ? call us:+01 0123 456789
        </div>
        <div className="w-full text-sm lg:text-xl sm:w-full lg:w-2/5  flex justify-between">
          <button
            onClick={() => {
              setHeadCountNum(headCountNum - 1);
              setHeadCountArr((headCountNum - 1) % 3);
            }}
          >
            <FontAwesomeIcon icon={faAngleLeft} size="xl" />
          </button>
          <p>{TitleArr[headCountArr]}</p>
          <button
            onClick={() => {
              setHeadCountNum(headCountNum + 1);
              setHeadCountArr((headCountNum + 1) % 3);
            }}
          >
            <FontAwesomeIcon icon={faAngleRight} size="xl" />
          </button>
        </div>
        <div className="hidden sm:hidden lg:w-1/5 lg:flex justify-around">
          <div className="">
            Austria <FontAwesomeIcon icon={faAngleDown} />
          </div>
          <div className="">
            English <FontAwesomeIcon icon={faAngleDown} />
          </div>
        </div>
      </div>
    </>
  );
};
export default HeadTop;
