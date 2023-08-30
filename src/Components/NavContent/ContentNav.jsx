import { NavLink } from "react-router-dom";
import "./ContentNav.scss";
import "./ContentNavResponsive.scss";

const NavContent = ({
  author,
  icon,
  content,
  avatar,
  name,
  url,
  link,
  handleSetModal,
  isMobile
}) => {
  return (
    <>
      {author ? (
        <NavLink to={`${link}`}>
          <div onClick={ isMobile ? handleSetModal(false) : undefined} className="nav-content">
            <div className="nav-content__author ">
              <div className="author--avatar">
                <img src={avatar} alt="teacher-image" />
              </div>
              <div className="author--name">
                <span>{name}</span>
              </div>
            </div>
          </div>
        </NavLink>
      ) : (
        <NavLink to={`${url}`}>
          <div className="nav-content">
            <div className="nav-content__lists">
              {icon}
              <span className="text--mobile">{content}</span>
            </div>
          </div>
        </NavLink>
      )}
    </>
  );
};
export default NavContent;
