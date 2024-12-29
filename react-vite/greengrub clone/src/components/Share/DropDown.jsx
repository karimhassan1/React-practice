import { Link } from "react-router-dom";
const DropDownChild = (childData) => {
  const { data1 } = childData;
  return (
    <>
      <Link>
        <li className="border-b-2 p-2">{data1}</li>{" "}
      </Link>
    </>
  );
};
const DropDown = (ParentData) => {
  const { data } = ParentData;
  return (
    <div id="homeDropDown" className="absolute top-4 bg-white w-52 hidden">
      <ul>
        {data.map((list, index) => {
          return <DropDownChild data1={list} key={index} />;
        })}
      </ul>
    </div>
  );
};

export default DropDown;
