import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCartShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
const HeadMiddle = () => {
  const [orderCount, setOrderCount] = useState(0);
  const [searchInput, setSearchInput] = useState("");
  return (
    <div className="border h-24 flex justify-around items-center">
      <div className="w-1/4 p-4 rounded">
        <input
          type="text"
          className="bg-search border-none outline-none p-4"
          value={searchInput}
          placeholder="Search"
          onChange={(e) => {
            setSearchInput(e.target.value);
            console.log(e);
          }}
        />
        <button className="bg-search p-4">
          <FontAwesomeIcon icon={faMagnifyingGlass} size="xl" />
        </button>
      </div>
      <div className="w-1/2 flex justify-center">
        <img
          src="//greengrub-theme.myshopify.com/cdn/shop/files/L09-logo.png?v=1706086795&width=600"
          alt="Logo"
        />
      </div>
      <div className="w-1/5 flex justify-center items-center">
        <div className="me-10 text-3xl">
          <FontAwesomeIcon icon={faUser} />
        </div>
        <div className=" bg-primary flex p-3 rounded-md text-white items-center">
          <div className="me-2">
            <FontAwesomeIcon icon={faCartShopping} />
          </div>
          <div className="bg-white text-primary rounded-full w-5 h-5 flex justify-center items-center me-2">
            <p>{orderCount}</p>
          </div>
          <p>Cart</p>
        </div>
      </div>
    </div>
  );
};
export default HeadMiddle;
