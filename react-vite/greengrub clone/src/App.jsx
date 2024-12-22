import HeadTop from "./components/Header/HeadTop";
import HeadMiddle from "./components/Header/HeadMiddle";
import HeadBottom from "./components/Header/HeadBottom";
import FooterTop from "./components/Footer/FooterTop";
import FooterMiddle from "./components/Footer/FooterMiddle";
import FooterBottom from "./components/Footer/FooterBottom";
import HomeBody from "./components/Body/Home/HomeBody";
import BrandIcon from "./components/Footer/BrandIcon";
import { brandIconData } from "./components/constant/HomeData";
export const Header = () => {
  return (
    <>
      <HeadTop />
      <HeadMiddle />
      <HeadBottom />
    </>
  );
};
export const HomeBodyApp = () => {
  return (
    <>
      <HomeBody />
    </>
  );
};
export const Footer = () => {
  return (
    <>
      <BrandIcon data={brandIconData} />
      <FooterTop />
      <FooterMiddle />
      <FooterBottom />
    </>
  );
};
