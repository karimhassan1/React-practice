import {
  homeData,
  topPicBelowContentData,
  smallDivHavingPicDescriptiondata1,
  HalfContentPicData,
  productShowGalleryData,
  smallDivHavingPicDescriptiondata2,
  twoImagesTextData,
  ProductListSmallPicCourousalData,
  specialOfferData,
  smallDivHavingPicDescriptiondata3,
} from "../../constant/HomeData";
import Courousal from "../../Share/Courousal";
import HalfcontentPic from "./HalfContentPic";
import TopPicBelowContentMain from "./topPicBelowContent";
import FullVideo from "../../Share/FullVideo";
import SmallDivHavingPicDescription from "../../Share/SmallDivHavingPicDescription";
import ProductShowGallery from "./ProductShowGallery";
import TwoImagesText from "./TwoImagesText";
import ProductListSmallPicCourousal from "./ProductListSmallPicCourousal";
import SpecialOffer from "./SpecialOffer";

// the below code use the general courousal body structure and then return the courousal here
// and this is the part of the home courousal
const HomeCourousal = () => {
  return (
    <>
      <div className="w-100 courousal-img-div-height overflow-hidden">
        {homeData.map((data, index) => {
          return (
            <Courousal data={data} dataLength={homeData.length} key={index} />
          );
        })}
      </div>
    </>
  );
};

const HomeBody = () => {
  return (
    <>
      <HomeCourousal />
      <HalfcontentPic {...HalfContentPicData} />
      <TopPicBelowContentMain data={topPicBelowContentData} />
      <FullVideo src="https://www.youtube.com/embed/_9VUPq3SxOc?enablejsapi=1" />
      <SmallDivHavingPicDescription {...smallDivHavingPicDescriptiondata1} />
      <ProductShowGallery data={productShowGalleryData} />
      <TwoImagesText data={twoImagesTextData} />
      <SmallDivHavingPicDescription {...smallDivHavingPicDescriptiondata2} />
      <ProductListSmallPicCourousal data={ProductListSmallPicCourousalData} />
      <SpecialOffer {...specialOfferData} />
      <SmallDivHavingPicDescription {...smallDivHavingPicDescriptiondata3} />
    </>
  );
};
export default HomeBody;
