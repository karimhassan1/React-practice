import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const GitHubBody = ({ param }) => {
  console.log(param);
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
          My Project Repository <FontAwesomeIcon icon={faAngleDown} size="xl" />
        </h1>
        <div>
          <ul className="gitHubLink flex flex-col justify-center items-start ">
            <li>
              <Link to="https://github.com/karimhassan1/React-practice/tree/main/react-vite/greengrub%20clone">
                Green Grub On React Vite
              </Link>
            </li>
            <li>
              <Link to="https://github.com/karimhassan1/React-practice/tree/main/react-vite/greengrub%20clone">
                React Practice on parcel
              </Link>
            </li>
            <li>
              <Link to="#">Php use for Medical Store managment</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GitHubBody;
