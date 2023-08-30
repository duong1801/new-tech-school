/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BsFillPersonLinesFill, BsNewspaper } from "react-icons/bs";
import { FiMonitor } from "react-icons/fi";
import { useDispatch } from "react-redux";
import ContentNav from "../../../Components/NavContent/ContentNav";
import { fetchAllAuthors } from "../../../Slice/AuthorsSlice";
import "./SideBarMobile.scss";
import "./SideBarMobileResponesive.scss";


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
    url: "/courses",
  },
  {
    id: 3,
    icon: <BsNewspaper size={20} />,
    content: "Bài viết",
    url: "/blog",
  },
];

const SideBarMobile = (props) => {
  const dispatch = useDispatch();
  const { handleSetModal } = props;

  useEffect(() => {
    dispatch(fetchAllAuthors());
  }, [dispatch]);

  return (
    <div className="nav-mobile d-lg-none d-sm-block">
      <div className="nav-content">
        <div className="nav-list_course">
          {listTitles?.map((item) => (
            <ContentNav key={item.id} {...item} />
          ))}

          <div
            className="nav-content"
            onClick={() => handleSetModal(true)}
          >
            <div className="nav-content__lists">
              <BsFillPersonLinesFill size={20} />
              <span className="text--mobile">Giảng viên</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SideBarMobile;
