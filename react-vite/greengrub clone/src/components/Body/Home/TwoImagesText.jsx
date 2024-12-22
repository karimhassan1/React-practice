const TwoImagesTextCheck = (dataChild) => {
  const { data } = dataChild;
  // console.log(data1);
  return (
    <div className="lg:w-2/5 lg:h-60 lg:me-10 relative m-2">
      <img src={data.bgImgPath} alt="" className="w-full h-full rounded-xl" />
      <div className="absolute top-0 w-1/2 h-full flex flex-col text-white justify-center items-center">
        <h1 className="text-xs lg:text-2xl">{data.heading}</h1>
        <p className="lg:text-3xl lg:font-bold lg:ms-5">{data.description}</p>
        <button className="text-sm border p-1 lg:p-2 rounded-xl lg:mt-5 bg-white text-black">
          {data.button}
        </button>
      </div>
    </div>
  );
};
const TwoImagesText = (dataParent) => {
  const { data } = dataParent;
  return (
    <div className="lg:h-72 flex flex-col sm:flex-row mt-12 mb-12 justify-center items-center">
      {data.map((list, index) => {
        return <TwoImagesTextCheck data={list} key={index} />;
      })}
    </div>
  );
};
export default TwoImagesText;
