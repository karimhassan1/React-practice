import {
  topPicBelowContentData,
  smallDivHavingPicDescriptiondata1,
  HalfContentPicData,
  productShowGalleryData,
  smallDivHavingPicDescriptiondata2,
  twoImagesTextData,
  ProductListSmallPicCourousalData,
  specialOfferData,
  smallDivHavingPicDescriptiondata3,
  threeHomeButtons,
  smallDivHavingPicDescriptiondata4,
  recentBlogPostData,
} from "../../constant/HomeData";
import HalfcontentPic from "./HalfContentPic";
import TopPicBelowContentMain from "./topPicBelowContent";
import FullVideo from "../../Share/FullVideo";
import SmallDivHavingPicDescription from "../../Share/SmallDivHavingPicDescription";
import ProductShowGallery from "./ProductShowGallery";
import TwoImagesText from "./TwoImagesText";
import ProductListSmallPicCourousal from "./ProductListSmallPicCourousal";
import SpecialOffer from "./SpecialOffer";
import Buttons from "../../Share/Buttons";
import FreshProductList from "./FreshProductHoizantal";
import RecentBlogPost from "./RecentBlogPost";
import HomeCourousal from "./HomeCourousal";

// the below code use the general courousal body structure and then return the courousal here
// and this is the part of the home courousa

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
      <Buttons data={threeHomeButtons} />
      <FreshProductList data={ProductListSmallPicCourousalData} />
      <SmallDivHavingPicDescription {...smallDivHavingPicDescriptiondata4} />
      <RecentBlogPost data={recentBlogPostData} />
    </>
  );
};
export default HomeBody;
