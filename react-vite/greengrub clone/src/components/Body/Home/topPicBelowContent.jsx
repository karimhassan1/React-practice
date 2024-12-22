const TopPicBelowContent = (data) => {
  return (
    <>
      <div className="w-full lg:w-1/4 flex lg:flex-col justify-center items-center relative mt-8 lg:mt-0">
        <div className="h-32 border-8 rounded-100-percent me-2 w-32 lg:absolute lg:top-0 flex justify-center items-center bg-white">
          <img className="lg:w-3/4 lg:h-3/4" src={data.imgPath} alt="" />
        </div>
        <div className="w-3/4 bg-search lg:h-3/4  flex justify-center items-center flex-col rounded-xl">
          <p className="lg:mt-5 lg:mb-5 font-bold text-sm lg:text-xl">
            {data.mainHeading}
          </p>
          <p className="text-sm ps-4 pe-4">{data.description}</p>
        </div>
      </div>
    </>
  );
};

// this is the main div where the child should be appear
const TopPicBelowContentMain = (mainData) => {
  const { data } = mainData;
  return (
    <div className="lg:h-96 flex flex-col lg:flex-row justify-around mt-8 flex-wrap ps-1 pe-1 mb-20  lg:ps-0 lg:pe-0">
      {data.map((datachild, index) => {
        return <TopPicBelowContent {...datachild} key={index} />;
      })}
    </div>
  );
};
// (Round pic on the top and below or the content depend on div
//  on the number of iteration from the object or array data this is the child inside of the main

export default TopPicBelowContentMain;
