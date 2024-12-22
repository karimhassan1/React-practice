import {
  faCcVisa,
  faCcMastercard,
  faCcDiscover,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const FooterBottom = () => {
  return (
    <div className="w-full h-28 border-t-2">
      <ul className="flex flex-row flex-wrap lg:flex-row m-auto w-full lg:w-2/3 ul-in-footer-bottom footer-text-color mt-4">
        <li className="w-2/5">About Us </li>
        <li className="w-2/5">Contact</li>
        <li className="w-2/5">Faq</li>
        <li className="w-2/5">Privacy Policy</li>
        <li className="w-2/5">Shipping Policy</li>
        <li className="w-2/5">Term & condition</li>
        <li className="w-2/5">Return & Recharge</li>
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
