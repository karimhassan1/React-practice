import { faHeadphones } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const FooterMiddle = () => {
  return (
    <div className="h-96 flex justify-around mt-14">
      {/* first block of the middle footer start */}
      <div className="w-1/5  footer-text-color">
        <h1 className="font-bold text-xl mb-8 text-black">Contact Info</h1>
        <div className="flex mb-6">
          <div className="flex items-center">
            <FontAwesomeIcon icon={faHeadphones} className="text-4xl" />
          </div>
          <div className="ms-4">
            <h1 className="text-xl">Hotline Free 24/7</h1>
            <h1 className="font-bold text-xl text-black">+92 34775884</h1>
          </div>
        </div>
        <h1 className="mb-4">ADDRESS : 1010 White Street block , USA</h1>
        <h1>Email : Admin@gmail.com</h1>
      </div>
      {/* the second block of the middle footer start */}
      <div className="w-1/5">
        <h1 className="font-bold">My Account</h1>
        <ul className="footer-text-color ul-in-footer-middle">
          <li>About Us</li>
          <li>Contact</li>
          <li>Faq</li>
          <li>Privacy Policy</li>
          <li>Shipping Policy</li>
          <li>Term & Condition</li>
          <li>Return & Exchange</li>
        </ul>
      </div>
      {/* start block 3 of the footer middle */}
      <div className="w-1/5">
        <h1 className="font-bold">Customer Service</h1>
        <ul className="footer-text-color ul-in-footer-middle">
          <li>About us</li>
          <li>Contact</li>
          <li>Faq</li>
          <li>Privacy Policy</li>
          <li>Shipping Policy</li>
          <li>Term & Condition</li>
          <li>Return & Exchange</li>
        </ul>
      </div>
      <div className="w-1/5">
        <h1 className="font-bold">Follow Us</h1>
        <div className="flex text-white justify-around">
          <div className="facebook-icon-background ps-4 pe-4 pt-3 pb-3 p rounded-lg">
            <FontAwesomeIcon icon={faFacebookF} size="xl" />
          </div>
          <div className="instagram-icon-background ps-4 pe-4 pt-3 pb-3 p rounded-lg">
            <FontAwesomeIcon icon={faInstagram} size="xl" />
          </div>
          <div className="twitter-icon-background ps-4 pe-4 pt-3 pb-3 p rounded-lg">
            <FontAwesomeIcon icon={faTwitter} size="xl" />
          </div>
          <div className="linkedin-icon-background ps-4 pe-4 pt-3 pb-3 p rounded-lg">
            <FontAwesomeIcon icon={faLinkedin} size="xl" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default FooterMiddle;
