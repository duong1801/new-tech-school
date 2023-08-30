import { useEffect } from "react";
import { Container } from "react-bootstrap";
import Skeleton from "react-loading-skeleton";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Header from "../../Layouts/Header/Header";
import { fetchPostDetail } from "../../Slice/PostsSlice";
import "./PostDetail.scss";

const PostDetail = () => {
  const { articleID } = useParams();

  const dispath = useDispatch();
  const postDetail = useSelector((state) => state.posts.postDetail.postDetail);
  const isLoading = useSelector((state) => state.posts.postDetail.isLoading);

  const IsLoadingPostComponent = () => {
    return (
      <>
        <Skeleton />
        <div className="my-3">
          <Skeleton />
        </div>
        <div className="mt-3">
          <Skeleton />
        </div>
        <div className="mt-3">
          <Skeleton />
        </div>
      </>
    );
  };

  useEffect(() => {
    dispath(fetchPostDetail(articleID));
  }, [articleID]);

  return (
    <div className="posts post-detail">
      <div className="middle-sidebar-bottom background-whiteGray">
        <div className="pt-4">
          <Container>
            {isLoading ? (
              <IsLoadingPostComponent />
            ) : (
              <>
                <div>
                  <h1>{postDetail?.title}</h1>
                  <p className="my-3">
                    Tác giả:{" "}
                    <Link
                      to={`${postDetail?.author?.link}`}
                      className="hover"
                    >
                      {postDetail?.author?.name}
                    </Link>
                  </p>
                  <div
                    className="about-author"
                    dangerouslySetInnerHTML={{
                      __html: `${postDetail?.content}`,
                    }}
                  ></div>
                </div>
                <div>
                  <p className="mt-3">
                    Category:{" "}
                    {postDetail?.categoryBlogs?.map((category, index) => (
                      <Link
                        to={`/article/category/${category.id}`}
                        className="px-2 hover"
                        key={category.id}
                      >
                        {category.name}
                      </Link>
                    ))}
                  </p>
                  <p className="mt-3">
                    Tags:{" "}
                    {postDetail?.tags?.map((tag, index) => (
                      <Link
                        to={`/article/tag/${tag.id}`}
                        className="px-2 hover"
                        key={index}
                      >
                        {tag.name}
                      </Link>
                    ))}
                  </p>
                </div>
              </>
            )}
          </Container>
        </div>
      </div>
    </div>
  );
};
export default PostDetail;
