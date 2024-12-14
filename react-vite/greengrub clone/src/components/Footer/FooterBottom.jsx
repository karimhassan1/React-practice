import {
  faCcVisa,
  faCcMastercard,
  faCcDiscover,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const FooterBottom = () => {
  return (
    <div className="h-28 border-t-2">
      <ul className="flex m-auto w-2/3 ul-in-footer-bottom footer-text-color mt-4">
        <li>About Us </li>
        <li>Contact</li>
        <li>Faq</li>
        <li>Privacy Policy</li>
        <li>Shipping Policy</li>
        <li>Term & condition</li>
        <li>Return & Recharge</li>
      </ul>
      <div className="flex justify-end">
        <FontAwesomeIcon
          icon={faCcVisa}
          size="xl"
          className="text-blue-600 me-5 text-4xl"
        />
        <FontAwesomeIcon
          icon={faCcMastercard}
          size="xl"
          className="text-blue-600 me-5 text-4xl"
        />
        <FontAwesomeIcon
          icon={faCcDiscover}
          size="xl"
          className="text-orange-500 me-5 text-4xl"
        />
      </div>
    </div>
  );
};
export default FooterBottom;
