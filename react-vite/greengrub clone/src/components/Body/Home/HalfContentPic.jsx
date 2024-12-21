const HalfcontentPic = (data) => {
  const { left, right, bottom } = { ...data };
  return (
    <>
      <div className="w-full h-auto sm:h-auto h-500-px flex  sm:flex-col-reverse lg:flex-row mt-24 ps-8 flex-wrap ">
        <div className="lg:w-1/2 sm:w-full flex flex-col justify-center items-start">
          <div className="">
            <img src={left.logoImg} alt="" />
            <p className="text-primary text-3xl mt-5">{left.shortHeading}</p>
            <p className="lg:text-6xl font-bold mt-5">{left.mainHeading}</p>
          </div>
          <div className="flex w-full mt-10 border-b-2">
            <div className="w-1/2 flex items-center">
              <img src={left.imgShort1} alt="" />
              <p className="text-2xl">{left.contentImgShort1}</p>
            </div>
            <div className="w-1/2 flex items-center ">
              <img src={left.imgShort2} alt="" />
              <p className="text-2xl">{left.contentImgShort2}</p>
            </div>
          </div>
          <div className="mt-5">
            <p>{left.longContent}</p>
            <button className="border p-4 bg-primary rounded-xl mt-10">
              {left.buttonText}
            </button>
          </div>
        </div>
        <div className="lg:w-1/2 flex">
          <div>
            <img
              src={right.img1}
              className="rounded-2xl p-2"
              alt="Hand having apple"
            />
            <img src={right.img2} className="rounded-2xl p-2" alt="" />
          </div>
          <div>
            <img src={right.img3} className="rounded-2xl p-2" alt="" />
          </div>
        </div>
      </div>
      <div className="w-full mt-5 flex flex-col justify-center items-center">
        <img src={left.logoImg} alt="" />
        <p className="text-xl text-primary">{bottom.shortContent}</p>
        <p className="text-4xl mt-6 mb-10">{bottom.headingContent}</p>
      </div>
    </>
  );
};
export default HalfcontentPic;
