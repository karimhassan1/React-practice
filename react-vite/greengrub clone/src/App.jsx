import HeadTop from "./components/HeadTop";
import HeadMiddle from "./components/HeadMiddle";
import HeadBottom from "./components/HeadBottom";
import FooterTop from "./components/FooterTop";
import FooterMiddle from "./components/FooterMiddle";
import FooterBottom from "./components/FooterBottom";

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
