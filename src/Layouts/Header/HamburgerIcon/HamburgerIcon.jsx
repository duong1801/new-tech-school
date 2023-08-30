import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import {
  hideNavbarTablet,
  showNavbarTablet
} from "../../../Slice/NavBarTabletSlice";
import "./HamburgerIcon.scss";

export default function HamburgerIcon() {
  const isShow = useSelector((state) => state.navbarTablet.isOpen);
  const dispatch = useDispatch();
  const handleShow = (status) => {
    if (!status) {
      dispatch(showNavbarTablet());
    } else {
      dispatch(hideNavbarTablet());
    }
  };
  // useEffect(() => {
  //   window.addEventListener("resize", () => {
  //     const widthScreen = document.documentElement.clientWidth;
  //     if (widthScreen >= 1200 || widthScreen < 768) {
  //       dispatch(hideNavbarTablet());
  //     }
  //   });
  //   return () => {
  //     window.removeEventListener("resize", () => {});
  //   };
  // }, []);
  return (
    <div>
      <GiHamburgerMenu
        className="hamburger-icon"
        onClick={(e) => {
          e.stopPropagation();
          handleShow(isShow);
        }}
      />
    </div>
  );
}
