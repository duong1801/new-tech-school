import { BsTwitter } from "react-icons/bs";
import { FaFacebookF, FaTiktok } from "react-icons/fa";
import "./SocialNetwork.scss";
const SocialNetwork = () => {
  return (
    <div className="social-network">
      <a href="https://www.facebook.com/tech2software">
        <FaFacebookF className="social-network__icon" />
      </a>
      <a href="#">
        <BsTwitter className="social-network__icon" />
      </a>
      <a href="#">
        <FaTiktok className="social-network__icon" />
      </a>
    </div>
  );
};
export default SocialNetwork;
