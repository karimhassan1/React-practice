import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import {
  faAngleRight,
  faAngleLeft,
  faAngleDown,
  faHandPointRight,
} from "@fortawesome/free-solid-svg-icons";

let TitleArr = [
  "Get $50 Gift card on a purchase of $ 1000",
  "For free shipping purchase only $50",
  "Use discount code GREENGRUB001 get 5% off",
];
const HeadTop = () => {
  let [headCount, setHeadCount] = useState(0);
  return (
    <>
      <div className="w-full bg-head-top h-12 flex justify-around items-center text-white">
        <div className="w-1/4">Need help ? call us:+01 0123 456789</div>
        <div className="w-2/5 flex justify-between">
          <button>
            <FontAwesomeIcon icon={faAngleLeft} size="xl" />
          </button>
          <p>{TitleArr[headCount]}</p>
          <button
            onClick={() => {
              putInHeadCount = 
              setHeadCount(headCount % 3);
            }}
          >
            <FontAwesomeIcon icon={faAngleRight} size="xl" />
          </button>
        </div>
        <div className="w-1/5 flex justify-around">
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
