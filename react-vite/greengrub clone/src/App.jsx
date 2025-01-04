import HeadTop from "./components/Header/HeadTop";
import HeadMiddle from "./components/Header/HeadMiddle";
import HeadBottom from "./components/Header/HeadBottom";
import FooterTop from "./components/Footer/FooterTop";
import FooterMiddle from "./components/Footer/FooterMiddle";
import FooterBottom from "./components/Footer/FooterBottom";
import HomeBody from "./components/Body/HomeBody";
import BrandIcon from "./components/Footer/BrandIcon";
import { brandIconData } from "./components/constant/HomeData";
export const Header = () => {
  return (
    <div className="w-full max-w-[1850px]">
      <HeadTop />
      <HeadMiddle />
      <HeadBottom />
    </div>
  );
};
export const HomeBodyApp = () => {
  return (
    <div className="w-full max-w-[1850px]">
      <HomeBody />
    </div>
  );
};
export const Footer = () => {
  return (
    <div className="">
      <BrandIcon data={brandIconData} />
      <FooterTop />
      <FooterMiddle />
      <FooterBottom />
    </div>
  );
};
