const ProductShowGalleryChild = (dataChild) => {
  const { data } = dataChild;
  return (
    <div className="lg:h-96 lg:w-60 w-1/4 me-6 p-5 border bg-white rounded-xl">
      <div className="h-2/3 flex flex-col items-center">
        <img src={data.imgPath} className="rounded-2xl w-full h-full" alt="" />
      </div>
      <div>
        <h6 className="text-center mt-5 lg:text-xl">{data.name}</h6>
      </div>
      <div className="flex justify-center mt-2">
        <button className="border p-1 lg:p-3 bg-primary text-xs lg:text-xl text-white rounded-xl">
          {data.buttonText}
        </button>
      </div>
    </div>
  );
};

const ProductShowGallery = (Parentdata) => {
  const { data } = Parentdata;
  return (
    <div className="h-auto bg-search w-full border flex justify-center items-center p-3">
      <div className="flex flex-wrap flex-row justify-center items-center">
        {data.map((list, index) => {
          return <ProductShowGalleryChild data={list} key={index} />;
        })}
      </div>
    </div>
  );
};
export default ProductShowGallery;
