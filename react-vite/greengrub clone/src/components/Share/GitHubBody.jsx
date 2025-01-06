import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState } from "react";
const GitHubBody = ({ param }) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="w-full mt-10 max-w-[1400px]">
      <div className="w-5/6 sm:w-3/4 lg:w-1/2 sm:text-2xl p-3 m-auto border lg:p-10 flex flex-col justify-center">
        <h1 className="border-b-2 text-center text-2xl mb-5 ps-2 pe-2 font-bold outline-1">
          My GitHub Profile
        </h1>
        <img
          src={param.avatar_url}
          className="border rounded-full lg:w-1/2"
          alt=""
        />
        <h1 className="font-bold text-3xl capitalize mt-5 border-b-2">
          {param.login}
        </h1>
        <h1 className="mt-3">{param.bio}</h1>
        <h1 className="text-xl">Id: {param.id}</h1>
        <h1 className="text-2xl font-bold">
          My Project Repository{" "}
          {isVisible ? (
            <button
              onClick={() => {
                setIsVisible(false);
              }}
            >
              {" "}
              <FontAwesomeIcon icon={faAngleUp} size="" />
            </button>
          ) : (
            <button
              onClick={() => {
                setIsVisible(true);
              }}
            >
              <FontAwesomeIcon icon={faAngleDown} size="" />
            </button>
          )}
        </h1>
        {isVisible && (
          <div className="mt-5">
            <ul className="gitHubLink flex flex-col justify-center items-start ">
              <li className="p-3">
                <Link to="https://github.com/karimhassan1/React-practice/tree/main/react-vite/greengrub%20clone">
                  Green Grub
                </Link>
              </li>
              <li className="p-3">
                <Link to="https://github.com/karimhassan1/React-practice/tree/main/react-vite/greengrub%20clone">
                  React
                </Link>
              </li>
              <li className="p-3">
                <Link to="#">Store managment</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default GitHubBody;
