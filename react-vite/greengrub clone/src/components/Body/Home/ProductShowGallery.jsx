const ProductShowGalleryChild = (dataChild) => {
  const { data } = dataChild;
  return (
    <div className="h-96 w-60 me-6 p-5 border bg-white rounded-xl">
      <div className="h-2/3 flex flex-col items-center">
        <img src={data.imgPath} className="rounded-2xl w-full h-full" alt="" />
      </div>
      <div>
        <h6 className="text-center mt-5 text-xl">{data.name}</h6>
      </div>
      <div className="flex justify-center mt-2">
        <button className="border p-3 bg-primary text-white rounded-xl">
          {data.buttonText}
        </button>
      </div>
    </div>
  );
};

const ProductShowGallery = (Parentdata) => {
  const { data } = Parentdata;
  return (
    <div className="h-550-px sm:h-auto bg-search w-full border flex justify-center items-center p-3">
      <div className="flex sm:flex-col lg:flex-row">
        {data.map((list, index) => {
          return <ProductShowGalleryChild data={list} key={index} />;
        })}
      </div>
    </div>
  );
};
export default ProductShowGallery;
