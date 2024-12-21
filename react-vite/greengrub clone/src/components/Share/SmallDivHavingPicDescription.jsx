const SmallDivHavingPicDescription = (data) => {
  return (
    <div className="w-full h-60 border flex justify-center items-center flex-col">
      <img src={data.imgPath} alt="" className="mb-5" />
      <p className="text-primary text-2xl font-bold mb-5">{data.heading}</p>
      <p className="text-4xl font-bold">{data.description}</p>
    </div>
  );
};
export default SmallDivHavingPicDescription;
