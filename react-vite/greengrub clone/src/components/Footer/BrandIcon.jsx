const BrandIconChild = (childData) => {
  const { imgPath } = childData;
  console.log(imgPath);
  return (
    <div className="me-8 w-36">
      <img src={imgPath} alt="" />
    </div>
  );
};
const BrandIcon = (parentData) => {
  const { data } = parentData;
  return (
    <div className="h-44 border flex justify-center items-center">
      {data.map((list, index) => {
        return <BrandIconChild imgPath={list} key={index} />;
      })}
    </div>
  );
};
export default BrandIcon;
