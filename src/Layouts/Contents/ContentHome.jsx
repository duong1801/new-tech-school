import { Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import Partner from "../../Components/Partner/Partner";
import FeaturedPosts from "../../Pages/Home/Components/FeaturedPosts/FeaturedPosts";
import HomeSlide from "../../Pages/Home/Components/HomeSlide/HomeSlide";
import MainCourses from "../../Pages/Home/Main/MainCourses";
import { hideNavbarTablet } from "../../Slice/NavBarTabletSlice";
import Header from "../Header/Header";
import "./ContentHome.scss";

const ContentHome = () => {
  const dispatch = useDispatch();
  const handleHideMenu = (e) => {
    e.stopPropagation();
    dispatch(hideNavbarTablet());
  };
  return (
    <div className="content-main home-page" onClick={handleHideMenu}>
      <div className="middle-sidebar-bottom background-whiteGray">
        <Container>
          <HomeSlide />
          <MainCourses />
          <FeaturedPosts />
          <Partner />
        </Container>
      </div>
    </div>
  );
};
export default ContentHome;
