import { useState } from "react";
const SmallPicCourousalChild = (childData) => {
  const [showProductItems, setShowProductItems] = useState(0);
  const [num, setNum] = useState(2);
  setTimeout(() => {
    setNum(num + 1);
    setShowProductItems(num % 2);
  }, 4000);
  return showProductItems === childData.num ? (
    <div className="border lg:w-1/5 w-2/5 rounded-2xl bg-search lg:m-8 mb-3">
      <img src={childData.imgPath} alt="" className="w-full rounded-2xl" />
      <h1 className="text-center">{childData.name}</h1>
      <div className="flex flex-col justify-center items-center">
        <del>{childData.actualPrice}</del>
        <b className="ms-4">{childData.discountPrice}</b>
      </div>
    </div>
  ) : (
    <></>
  );
};

const ProductListSmallPicCourousal = (ParentData) => {
  const { data } = ParentData;

  return (
    <div className="h-auto border flex flex-wrap justify-around items-center">
      {data.map((list, index) => {
        return <SmallPicCourousalChild {...list} key={index} />;
      })}
    </div>
  );
};
export default ProductListSmallPicCourousal;
