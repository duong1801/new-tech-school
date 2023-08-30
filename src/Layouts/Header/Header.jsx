import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetail, fetchMyCourse } from "../../Slice/UserSlice";
import HamburgerIcon from "./HamburgerIcon/HamburgerIcon";
import "./header.scss";
import "./HeaderResponsive.scss";
import InputSearch from "./InputSearch/InputSearch";
import MenuIcon from "./MenuIcon/MenuIcon";

const Header = () => {
  const dispatch = useDispatch()

  let { userInfo } = useSelector((state) => state.user);

  const userToken = localStorage.getItem("token")
  ? JSON.parse(localStorage.getItem("token"))
  : null;


  useEffect(() => {
    if (userToken?.access_token) {
      dispatch(getUserDetail())
      dispatch(fetchMyCourse())
    }
  }, [userToken?.access_token])


  return (
    <header className="header">
      <div className="">
        <Row className="g-0">
          <Col sm={8} xs={0} lg={5} xl={5}>
            <InputSearch />
            <HamburgerIcon />
          </Col>
          <Col sm={4} xs={12} lg={7} xl={7}>
            <MenuIcon />
          </Col>
        </Row>
      </div>
    </header>
  );
};
export default Header;
