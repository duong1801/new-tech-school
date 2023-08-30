import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../../assets/logo-tech2.svg";
import logoWhite from "../../assets/logotech2-white-red.png";
import SocialNetwork from "../../Components/SocialNetwork/SocialNetwork";


const Footer = () => {
  const darkMode = useSelector((state) => state.darkMode.toggleDarkMode);
  return (
    <div className="footer border-top">
      <Container className="py-4 mt-3">
        <Row>
          <Col xs="12" md="6" lg="3">
            <div className="mb-3">
              <Link to="/">
                <img
                  src={darkMode ? logoWhite : logo}
                  alt="logo-tech2"
                  style={{ width: "150px" }}
                />
              </Link>
            </div>
            <div>
              <p>Địa chỉ: 9c9 ngõ 261 Trần Quốc Hoàn, Cầu Giấy, Hà Nội</p>
              <p className="py-2">Số điện thoại: 058929060</p>
              <p>Email: contact@tech2.com</p>
            </div>
          </Col>
          <Col xs="12" md="6" lg="3">
            <div className="mt-4">
              <h3>Khóa học</h3>
              <p className="mt-3 pb-2">
                <Link to={`/course/categories/1`} className="hover">
                  Front-end
                </Link>
              </p>
              <p className="pb-2">
                <Link to={`/course/categories/2`} className="hover">
                  Back-end
                </Link>
              </p>
            </div>
          </Col>
          <Col xs="12" md="6" lg="3">
            <div className="mt-4">
              <h3>Về chúng tôi</h3>
              <p className="mt-3 pb-2">
                <Link to={`/dieu-khoan`} className="hover">
                  Điều khoản
                </Link>
              </p>
              <p className="pb-2">
                <Link to={`/chinh-sach`} className="hover">
                  Chính sách
                </Link>
              </p>
              <p className="pb-2">
                <Link to={`/lien-he`} className="hover">
                  Liên hệ
                </Link>
              </p>
            </div>
          </Col>
          <Col xs="12" md="6" lg="3">
            <div className="mt-4">
              <h3>Tech2 trên mạng xã hội</h3>
              <SocialNetwork />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Footer;
