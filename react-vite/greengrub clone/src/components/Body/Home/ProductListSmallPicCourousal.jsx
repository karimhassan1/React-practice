import { useState } from "react";
const SmallPicCourousalChild = (childData) => {
  const [showProductItems, setShowProductItems] = useState(0);
  const [num, setNum] = useState(2);
  // console.log(num);
  setTimeout(() => {
    setNum(num + 1);
    setShowProductItems(num % 2);
    console.log(num);
  }, 4000);
  return showProductItems === childData.num ? (
    <div className="border w-1/5 rounded-2xl bg-search m-8">
      <img src={childData.imgPath} alt="" className="w-full" />
      <h1>{childData.name}</h1>
      <div>
        <del>{childData.actualPrice}</del>
        <b className="ms-4">{childData.discountPrice}</b>
      </div>
    </div>
  ) : (
    ""
  );
};

const ProductListSmallPicCourousal = (ParentData) => {
  const { data } = ParentData;

  return (
    <div className="h-auto border flex flex-wrap">
      {data.map((list, index) => {
        return <SmallPicCourousalChild {...list} key={index} />;
      })}
    </div>
  );
};
export default ProductListSmallPicCourousal;
