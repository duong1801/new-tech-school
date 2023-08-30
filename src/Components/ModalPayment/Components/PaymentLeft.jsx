import { Link } from "react-router-dom";

const PaymentLeft = ({
  discount,
  price,
  release,
  totalVideo,
  teachers,
  image,
  title,
}) => (
  <div className=" bg-white border-bottom border-end height">
    <div className="course-img">
      <img src={image} alt="course-image" />
  
    </div>
    <h5 className="mt-3">{title}</h5>
    <div className="price mb-3 p-1">
      {release  === 'debuted' &&
        (discount ? (
          <div>
            <p className="card-course--price text-danger text-decoration-line-through me-2 mb-2">
              Giá: {price.toLocaleString("vn-VN")}đ
            </p>
            <p className="card-course--sale fw-bold">Ưu đãi: {discount.toLocaleString("vn-VN")}đ</p>
          </div>
        ) : (
          <p>Giá: {price.toLocaleString("vn-VN")}đ</p>
        ))}
    </div>
    <div className="author d-flex">
      <div className="author-name">
        <Link to={`/teacher/detail/${teachers?.id}`} className="hover">
          <span className="fw-semibold fs-5">{teachers?.name}</span>
        </Link>
      </div>
    </div>
    <div className="video my-3 fw-semibold py-2 ">
      {/* Số lượng: {totalVideo} video */}
    </div>
  </div>
);
export default PaymentLeft;
