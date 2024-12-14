import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
const HeadBottom = () => {
  return (
    <div className="border-b-4 h-16 font-bold text-1xl">
      <ul className="flex items-center justify-around h-full w-1/3 m-auto">
        <li>
          Home <FontAwesomeIcon icon={faAngleDown} />
        </li>
        <li>
          Product <FontAwesomeIcon icon={faAngleDown} />
        </li>
        <li>
          Collection <FontAwesomeIcon icon={faAngleDown} />
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
