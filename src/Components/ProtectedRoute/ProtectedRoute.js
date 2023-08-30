import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { userToken } from "../../ultils";
import "./ProtectedRoute.scss";

const ProtectedRoute = () => {
  const {userToken, userInfo } = useSelector((state) => state.user);

  // console.log(localStorage.getItem("token"));
  // show unauthorized screen if no user is found in redux store
  if (!userToken) {
    return (
      <div className="unauthorized">
        <div>
          <h3>Trang này không tồn tại :( </h3>
          <Link to="/" className="tech2-btn mt-3">
            Quay về trang chủ
          </Link>
        </div>
      </div>
    );
  }

  // returns child route elements
  return <Outlet />;
};
export default ProtectedRoute;
