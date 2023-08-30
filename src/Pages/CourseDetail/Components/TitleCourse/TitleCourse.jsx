import { Link } from "react-router-dom";
import "./TitleCourse.scss";
const TitleCourse = ({ category, name, description }) => {
  return (
    <div className="title-course border p-4 rounded bg-white">
      <Link to={`${category?.url}`}>
        <span className={`${category?.name?.toLowerCase()} category-course`}>{category?.name}</span>
      </Link>
      <div className="">
        <h2 className="mt-3">{name}</h2>
        <div className="mt-4 rounded-3 border-0">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};
export default TitleCourse;
