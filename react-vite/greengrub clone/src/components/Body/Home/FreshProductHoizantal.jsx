const FreshProductListChild = (data) => {
  return (
    <div className="flex border w-1/5 h-72 ms-4 bg-search">
      <div>
        <img src={data.imgPath} alt="" className="h-full" />
      </div>
      <div>
        <h1 className="font-bold mt-10">{data.name}</h1>
        <div className="mt-5">
          <del>{data.actualPrice} </del>
          <b> {data.discountPrice}</b>
        </div>
        <button className="mt-7 border rounded p-1 bg-primary text-white">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

const FreshProductList = (parentData) => {
  const { data } = parentData;
  return (
    <div className="border flex flex-wrap justify-center">
      {data.map((list, index) => {
        return <FreshProductListChild {...list} key={index} />;
      })}
    </div>
  );
};
export default FreshProductList;
