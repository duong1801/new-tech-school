import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import "../../App.css";
import "./Page404.scss";

export default function Page404() {
  const navigate = useNavigate();
  const darkMode = useSelector((state) => state.darkMode.toggleDarkMode);
  return (
    <>
      <div className={darkMode ? "page-404--dark page-404" : "page-404"}>
        <h1 className={!darkMode ? "page-404__title" : "page-404__title--dark"}>
          404
        </h1>
        <p
          className={
            !darkMode ? "page-404__content" : "page-404__content--dark"
          }
        >
          Trang bạn đang tìm không tồn tại. Vui lòng trở lại trang chủ.
        </p>
        <button
          className="tech2-btn"
          onClick={() => {
            navigate("/");
          }}
        >
          Trang chủ
        </button>
      </div>
    </>
  );
}
