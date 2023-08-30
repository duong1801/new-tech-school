import { Link } from "react-router-dom";
import "./RenderPosts.scss";

const RenderPosts = ({slug, title, author, image, content, id, slugAuthor }) => {
  return (
    <div className="post-item mb-3 d-flex border rounded bg-white">
      <div className="posts-image">
        <Link to={`/article/detail/${id}`}>
          <img src={image} alt="blog" className="rounded-start" />
        </Link>
      </div>
      <div className="post-text py-2 px-4">
        <Link to={`/article/detail/${id}`} className="hover">
          <h2 className="pt-3">{title}</h2>
        </Link>
        {/* <p className="mb-3">{truncateString(content, 300)}</p> */}
        <Link to={`${author?.link}`} className="hover">
          <span className="pt-3 fw-bold fs-5">{author?.name}</span>
        </Link>
      </div>
    </div>
  );
};
export default RenderPosts;
