import { useState, useEffect } from "react";
const Courousal = (dataparent) => {
  const { data, dataLength } = { ...dataparent };
  let [animationNum, setAnimatioinNum] = useState(dataLength);
  useEffect(() => {
    console.log("check the rendering");
    setTimeout(() => {
      setAnimatioinNum(animationNum + 1);
    }, 5000),
      [];
  });

  return animationNum % dataLength == data.divKey ? (
    <div
      className="w-full h-full"
      // style={{
      //   backgroundImage: `url(${data.imgPath})`,
      //   backgroundSize: "cover",
      // }}
    >
      <div
        className={
          "w-full h-full flex " +
          (animationNum % dataLength == 0 ? "justify-start" : "justify-end")
        }
        style={{
          backgroundImage: `url(${data.imgPath})`,
          backgroundSize: "auto 100%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: `${
            animationNum % 2 == 0 ? "top right" : "top left"
          }`,
          backgroundColor: "#f8f4ec",
        }}
      >
        <div
          className={"w-2/3 h-full flex items-center justify-center flex-col "}
        >
          <p className="text-primary w-4/5 text-2xl mt-14">{data.topContent}</p>
          <p className="font-bold w-4/5 text-5xl mt-8">{data.headContent}</p>
          <div className="w-4/5 pt-4">
            <p className="text-3xl">
              FLAT :{" "}
              <b className="text-primary text-4xl">{data.saleContent} </b>
            </p>
          </div>
          <div className="w-4/5 flex mt-5  text-white">
            <button className="border bg-primary text-xl p-4 rounded-xl ">
              {data.buttonLeft}
            </button>
            <button className="ms-10 bg-black p-4 rounded-xl">
              {data.buttonRight}
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};
export default Courousal;