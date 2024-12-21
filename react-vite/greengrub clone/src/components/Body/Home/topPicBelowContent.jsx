const TopPicBelowContent = (data) => {
  return (
    <>
      <div className="w-1/4 flex flex-col justify-center items-center relative">
        <div className="h-32 border-8 rounded-100-percent w-32 absolute top-0 flex justify-center items-center bg-white">
          <img className="w-3/4 h-3/4" src={data.imgPath} alt="" />
        </div>
        <div className="bg-search h-3/4 w-full flex justify-center items-center flex-col rounded-xl">
          <p className="mt-5 mb-5 font-bold text-xl">{data.mainHeading}</p>
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
    <div className="h-96 flex justify-around mt-8 flex-wrap">
      {data.map((datachild, index) => {
        return <TopPicBelowContent {...datachild} key={index} />;
      })}
    </div>
  );
};
// (Round pic on the top and below or the content depend on div
//  on the number of iteration from the object or array data this is the child inside of the main

export default TopPicBelowContentMain;
