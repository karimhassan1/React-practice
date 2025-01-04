import { Link } from "react-router-dom";
import { HomePagesPathWithElements } from "../constant/HomeData";
const DropDownChild = ({ data1, pathData }) => {
  const { path } = pathData;
  return (
    <>
      <Link to={path}>
        <li className="border-b-2 p-3">{data1}</li>
      </Link>
    </>
  );
};

const DropDown = (ParentData) => {
  const { data, id } = ParentData;
  return (
    <div id={id} className="absolute top-5 w-56 max-h-80 overflow-y-auto">
      <div className="h-6"></div>
      <ul className="bg-white">
        <Link to={"/home2"}>
          <li className="border-b-2 p-3">Home 1-Supter Market</li>
        </Link>
        {HomePagesPathWithElements.map((list, index) => {
          return (
            <DropDownChild data1={data[index]} key={index} pathData={list} />
          );
        })}
      </ul>
    </div>
  );
};

export default DropDown;
