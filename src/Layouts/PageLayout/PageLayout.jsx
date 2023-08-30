import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import SideBar from "../Sidebar/SideBar";

export const PageLayout = () => {
  const darkMode = useSelector((state) => state.darkMode.toggleDarkMode);
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className={darkMode ? "main dark" : "main"}>
        <Row className="g-0 ">
          <Col className="d-none d-md-block d-xl-block" md={0} lg={2} xl={2}>
            <SideBar />
          </Col>
          <Col xs={12} sm={12} md={12} xl={10}>
            <div className="main-page">
              <div className="middle-sidebar-header">
                <Header />
              </div>
              <Outlet />
            </div>
          </Col>
        </Row>
        <Footer />
      </div>
    </>
  );
};
