const SmallDivHavingPicDescription = (data) => {
  return (
    <div className="h-auto w-full md:h-60 flex justify-center items-center flex-col mb-5">
      <img src={data.imgPath} alt="" className="md:mb-5" />
      <p className="text-primary text-sm lg:text-2xl font-bold mb-5">
        {data.heading}
      </p>
      <p className="lg:text-4xl text-sm font-bold">{data.description}</p>
    </div>
  );
};
export default SmallDivHavingPicDescription;
