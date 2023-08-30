import { AiFillCheckCircle } from "react-icons/ai";
import "./DescriptionCourse.scss";
const DescriptionCourse = ({ description }) => {
  return (
    <div className="description p-4 mt-4 rounded-3 border-0 overflow-hidden">
      <h2 className="fw-bold">Bạn sẽ học được gì từ bài học này</h2>
      <p>{description}</p>
      <ul className="lh-lg mt-3">
        {description?.list?.map((item, index) => (
          <li key={index} className="d-flex align-items-center">
            <AiFillCheckCircle className="check me-2" />
            <p>{item}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default DescriptionCourse;
