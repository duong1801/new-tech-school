import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchDetailAuthor } from "../../../../Slice/AuthorsSlice";
import { openModalPayment } from "../../../../Slice/ModalPayment";
import "./BuyCourse.scss";

const BuyCourse = ({
  discount,
  price,
  release,
  totalVideo,
  teachers,
  slugAuthor,
  image,
  canAccess
}) => {
  const dispatch = useDispatch();
  
  const handleShow = () => {
    dispatch(openModalPayment());
  };

  return (
    <div className="text-center rounded bg-white position-sticky border">
      <div className="course-img">
        <img src={image} alt="course-image" />
      </div>
      <div className="price mb-3 p-3 ">
        {release &&
          (discount ? (
            <div>
              <p className="card-course--price text-danger text-decoration-line-through me-2 mb-2">
                Giá: {price}đ
              </p>
              <p className="card-course--sale fw-bold">Ưu đãi: {discount}đ</p>
            </div>
          ) : (
            <p>Giá: {price}đ</p>
          ))}
      </div>
      <div className="author d-flex justify-content-center align-items-center">
        <div className="author-img me-3">
          <Link to={`/teacher/detail/${teachers?.id}`}>
            <img src={teachers?.image} alt="" />
          </Link>
        </div>
        <div className="author-name">
          <Link to={`/teacher/detail/${teachers?.id}`} className="hover">
            <span className="fw-semibold fs-5">{teachers?.name}</span>
          </Link>
        </div>
      </div>
      <div className="video my-3 fw-semibold py-2 ">
        {/* Số lượng: {totalVideo} video */}
      </div>
      {release === "debuted" ? (
        canAccess ? 
        <span
          className="tech2-btn border rounded px-3 mb-4"
        >
          Vào học
        </span>
        :
        <span
        className="tech2-btn border rounded px-3 mb-4"
        onClick={() => handleShow()}
      >
        Mua khóa học
      </span>
      ) : (
        <p className=" px-3 py-2 border rounded px-3 mb-4 d-inline-block disabled">
          Sắp ra mắt
        </p>
      )}
    </div>
  );
};
export default BuyCourse;
