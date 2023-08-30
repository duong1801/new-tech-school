/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchAllAuthors } from "../../Slice/AuthorsSlice";
import { FiMonitor } from "react-icons/fi";
import { BsNewspaper } from "react-icons/bs";
import { AiOutlineHome, AiOutlineClose } from "react-icons/ai";
import ContentNav from "../../Components/NavContent/ContentNav";
import SocialNetwork from "../../Components/SocialNetwork/SocialNetwork";
import logo from "../../assets/logo-tech2.svg";
import whiteLogo from "../../assets/logotech2-white-red.png";
import "./SideBar.scss";
import Skeleton from "react-loading-skeleton";
import { hideNavbarTablet } from "../../Slice/NavBarTabletSlice";

const listTitles = [
  {
    id: 1,
    icon: <AiOutlineHome size={20} />,
    content: "Trang chủ",
    url: "/",
  },
  {
    id: 2,
    icon: <FiMonitor size={20} />,
    content: "Khóa học",
    url: "/course",
  },
  {
    id: 3,
    icon: <BsNewspaper size={20} />,
    content: "Bài viết",
    url: "/article",
  },
];

const SideBar = () => {
  const dispatch = useDispatch();
  const authors = useSelector((state) => state.authors.allAuthors.listAuthors);
  const isLoading = useSelector((state) => state.authors.allAuthors.isLoading);
  const isError = useSelector((state) => state.authors.allAuthors.isError);
  const darkMode = useSelector((state) => state.darkMode.toggleDarkMode);
  const navbarTablet = useSelector((state) => state.navbarTablet.isOpen);
  const handleHideMenu = () => {
    dispatch(hideNavbarTablet());
  };
  useEffect(() => {
    dispatch(fetchAllAuthors());
  }, [dispatch]);

  return (
    <div
      className={
        navbarTablet
          ? "navigation tablet-menu scroll-y md-none"
          : "navigation scroll-y md-none"
      }
    >
      <div className="logo">
        <Link to="/">
          {<img src={darkMode ? whiteLogo : logo} alt="logo" />}
        </Link>
      </div>
      <div className="nav-list">
        <div className="nav-list__course">
          {listTitles?.map((item) => (
            <ContentNav key={item.id} {...item} />
          ))}
        </div>
        <div className="nav-list__author">
          <p>Danh sách giảng viên :</p>
          {authors?.map((author) => (
            <ContentNav key={author.id} author={true} {...author} />
          ))}
          <>
            {((isLoading && authors.length === 0) || isError) && (
              <div style={{ marginLeft: "10px" }}>
                <Skeleton count={3} />
              </div>
            )}
          </>
        </div>
        {/* <p>Tech2 trên mạng xã hội</p>
        <SocialNetwork /> */}
      </div>
      <AiOutlineClose className="close-btn" onClick={handleHideMenu} />
    </div>
  );
};
export default SideBar;
