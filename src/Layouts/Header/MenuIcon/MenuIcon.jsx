import { useEffect, useRef, useState } from "react";
import { BsMoon, BsSun } from "react-icons/bs";
import { BiUserCircle } from 'react-icons/bi'
import "./MenuIcon.scss";
import { openModalForm } from '../../../Slice/ModalFormSlice'
import { toggleMode } from '../../../Slice/DarkModeSlice'
import { useDispatch, useSelector } from "react-redux";
import "./MenuIcon.scss";
import { Link } from 'react-router-dom'
import { toast } from "react-toastify";
import { logout } from "../../../Slice/UserSlice";
import Skeleton from "react-loading-skeleton";
// import { userToken } from "../../../ultils";


const MenuIcon = () => {
  const [isShow, setIsShow] = useState(false)
  const ref = useRef(null);

  let { userToken, userInfo, loading } = useSelector((state) => state.user);
  const darkMode = useSelector((state) => state.darkMode.toggleDarkMode);

  const dispatch = useDispatch();
  const handleShow = () => {
    const actionOpenModal = openModalForm();
    dispatch(actionOpenModal);
  };
  const handleMode = () => {
    const actionToggleMode = toggleMode();
    dispatch(actionToggleMode);
  };

  const handleLogOut = () => {
    dispatch(logout());
    localStorage.removeItem("token")
    toast.success("Bạn đã đăng xuất")
  }

  useEffect(() => {
    if (darkMode) {
      document.body.style = "background: #1a2236;";
    } else {
      document.body.style = "background: transparent;";
    }
  }, [darkMode]);

  useEffect(() => {

    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsShow(false)
      }
    };
    const handleClickInside = (event) => {
      if (ref.current && ref.current.contains(event.target)) {
        setIsShow(true)
      }
    }

    document.addEventListener('click', handleClickOutside, true);
    document.addEventListener('click', handleClickInside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
      document.removeEventListener('click', handleClickInside, true);
    };
  }, [setIsShow]);


  return (
    <>
      <div className="header-icon">
        {!darkMode && <BsMoon size={35} color="#f53838" onClick={() => handleMode()} className="header-icon__moon" />}
        
        {darkMode && <BsSun size={35} color="#f53838" onClick={() => handleMode()} className="header-icon__moon" />}

        {!userToken && <button className="signup-btn" onClick={() => handleShow()}>Đăng nhập</button>}

        {userToken &&
          <div ref={ref}>
            {
              userInfo?.avatar === "TECH2" || userInfo?.avatar === null ? <BiUserCircle style={{ cursor: 'pointer' }} size={35} color="#f53838" /> : <img className="user-avatar" src={userInfo?.avatar} alt="user" />
            }
            {
              isShow &&
              <>
              {
                loading 
                ? 
                <div className="menu-dropdown">
                  <Skeleton count={3} />
                </div> 
                : 
                <div className="menu-dropdown">
                <p>Xin chào, <strong>{userInfo?.name}</strong></p>
                <Link to="/course/my-course">Khoá học của tôi</Link>
                <Link to="/user-setting">Thông tin cá nhân</Link>
                <Link to="/" onClick={() => handleLogOut()}>Đăng xuất</Link>
              </div>
              }
              </>
            }
          </div>
        }
      </div>
    </>
  );
};
export default MenuIcon;
