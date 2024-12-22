import { useState } from "react";
import SmallDivHavingPicDescription from "../../Share/SmallDivHavingPicDescription";
const SpecialOffer = (data) => {
  let [sec, setSec] = useState(Number(data.seconds));
  let [min, setMin] = useState(Number(data.minutes));
  setTimeout(() => {
    sec <= 1 ? setSec(60) : setSec(sec - 1);
  }, 1000);
  setTimeout(() => {
    min <= 0 ? setMin(60) : setMin(min - 1);
  }, 60000);
  return (
    <div className="h-auto border relative">
      <img src={data.bgImgPath} alt="" className="w-full h-full" />
      <div className="absolute top-0 flex justify-center items-center w-full h-full bg-white bg-opacity-20 lg:bg-opacity-0 flex-col lg:w-1/2">
        <SmallDivHavingPicDescription {...data.smallDivHavingPicDes} />
        <div>
          <b className="border-black me-5 bg-white  text-xs p-1 lg:p-4 md:text-xl rounded-xl">
            {data.days} days
          </b>
          <b className="border bg-white me-5 p-1 lg:p-4 text-xs md:text-xl rounded-xl">
            {data.hours} Hr
          </b>
          <b className="border bg-white me-5 p-1 lg:p-4 text-xs md:text-xl rounded-xl">
            {min} Min
          </b>
          <b className="border bg-primary text-white p-1 lg:p-4 text-xs md:text-xl rounded-xl">
            {sec} Sec
          </b>
        </div>
        <button className="mt-24 border bg-primary mb-5 p-1 lg:p-5 text-xs text-white rounded-xl">
          {data.button}
        </button>
      </div>
    </div>
  );
};
export default SpecialOffer;
