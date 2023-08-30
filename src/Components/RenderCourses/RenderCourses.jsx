import { Link } from "react-router-dom";
import "../../Pages/Home/Components/HomeSlide/HomeSlide.scss";
import { truncateString } from "../../ultils";
import "./RenderCourses.scss";

const RenderCourses = ({
  id,
  name,
  image,
  price,
  discount,
  category,
  release,
  teachers,
  description,
  url,
  thumbnail
}) => {

  function appendEllipsis(str) {
    return str + "...";
  }
  function trimUntilSpace(text = "") {
    if (text.length === 0) {
      return text;
    }
    const textLength = text.length;
    //Nếu vị trí cuối cùng là 1 dấu cách thì sẽ return ra đoạn text từ vị trí 0 - từ cuối cùng trước dấu cách
    if (text[textLength - 1] === " ") {
      return text.slice(0, textLength - 1);
    }
    return trimUntilSpace(text.slice(0, textLength - 1));
  }

  return (
    <div className={`card-course shadow-sm ${release === "comming_soon" && "release shadow"}`}>
      <div className="card-course-inner">
        <Link to={`/course/detail/${id}`}>
          <div className="card-course__image">
            <img src={image || thumbnail} alt="image-course" />
          </div>
        </Link>
        <div className="card-course__body">
          <div className="d-flex justify-content-between align-items-center mt-2 w-100">
            <Link to={`/course/categories/${category?.id}`} title={category?.name}>
              <span
                className={`card-course--category category-course ${category?.name.toLowerCase()}`}
              >
                {category?.name}
              </span>
            </Link>
            {release &&
              (discount ? (
                <div>
                  <span className="card-course--price text-decoration-line-through me-2">
                    {price.toLocaleString("vn-VN")}đ
                  </span>
                  <span className="card-course--sale fw-semibold">
                    {discount.toLocaleString("vn-VN")}đ
                  </span>
                </div>
              ) : (
                <span className="fw-semibold card-course--sale">
                  {price.toLocaleString("vn-VN")}đ
                </span>
              ))}
          </div>
          <div className="card-course--title mt-3 mb-2">
            <Link to={`/course/detail/${id}`} className="hover">
              <h4>{truncateString(name, 100)}</h4>
            </Link>
          </div>
          <div className="card-course--content">
            <p>
              {appendEllipsis(
                trimUntilSpace(truncateString(description, 130))
              )}
            </p>
          </div>
          <div className="author-name">
            <Link to={`/teacher/detail/${teachers?.id}`} className="hover">
              <span className="fw-bold">{teachers?.name}</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RenderCourses;
