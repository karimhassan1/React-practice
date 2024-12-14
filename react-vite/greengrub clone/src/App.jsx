import HeadTop from "./components/Header/HeadTop";
import HeadMiddle from "./components/Header/HeadMiddle";
import HeadBottom from "./components/Header/HeadBottom";
import FooterTop from "./components/Footer/FooterTop";
import FooterMiddle from "./components/Footer/FooterMiddle";
import FooterBottom from "./components/Footer/FooterBottom";

export const Header = () => {
  return (
    <>
      <HeadTop />
      <HeadMiddle />
      <HeadBottom />
    </>
  );
};
export const Footer = () => {
  return (
    <>
      <FooterTop />
      <FooterMiddle />
      <FooterBottom />
    </>
  );
};
export default Header;
