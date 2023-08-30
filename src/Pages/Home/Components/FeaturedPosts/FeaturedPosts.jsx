import { useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchSortHomePosts } from "../../../../Slice/PostsSlice";
import { truncateString } from "../../../../ultils";
import "./FeaturedPosts.scss";

const FeaturedPosts = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.listPostsHome.listPostsHome);
  const isLoading = useSelector((state) => state.posts.listPostsHome.isLoading);

  useEffect(() => {
    dispatch(fetchSortHomePosts());
  }, [dispatch]);

  const IsLoadingFeaturedPosts = () => {
    return (
      <div className="featuredPosts is-loading-posts pb-4">
        <h3 className="py-3">Bài viết nổi bật</h3>
        <div className="grid">
          {new Array(4).fill(0).map((item, index) =>
          (
            index === 0 ? (
              <div className="featuredPosts-left" key={index}>
                <div className="posts-img">
                  <Skeleton height={420} />
                </div>
                <div className="py-3">
                  <Skeleton />
                  <p>
                    <Skeleton />
                  </p>
                  <p>
                    <Skeleton />
                  </p>
                  <Skeleton />
                </div>
              </div>
            ) :
              <div
                className="featuredPosts-right"
                key={index}
              >
                <div className="posts-img">
                  <Skeleton height={185} width={210} />
                </div>
                <div className="py-sm-3 w-100 px-sm-4">
                  <Skeleton />
                  <p>
                    <Skeleton />
                  </p>
                  <p>
                    <Skeleton count={2} />
                  </p>
                  <Skeleton />
                </div>
              </div>

          ))}
        </div>
      </div>
    );
  };

  // if (!posts || posts.length === 0) {
  //   return <div aria-hidden />
  // }
  return (
    <>
      {
        isLoading ? <IsLoadingFeaturedPosts /> :
          <div className="featuredPosts pb-4">
            <div className="d-flex justify-content-between align-items-center">
              <h3 className="py-3">Bài viết nổi bật</h3>
              <Link to="/article" className="hover">
                <span className="fs-5">Xem thêm</span>
              </Link>
            </div>
            <div className="grid">
              {posts?.map((post, index) => (
                <div
                  className={` ${index === 0 ? "featuredPosts-left" : "featuredPosts-right"
                    }`}
                  key={index}
                >
                  <div className="posts-img">
                    <Link to={`/article/detail/${post.id}`}>
                      <img src={post.image} alt="post" />
                    </Link>
                  </div>
                  <div className={`posts-content ${index !== 0 ? "px-4 py-2" : "py-3"}`}>
                    <Link to={`/article/detail/${post.id}`} className="hover">
                      <h4 className="mb-3">{post.title}</h4>
                    </Link>
                    {/* <p className="mb-3">
                      <i>{post.created_at}</i>
                    </p> */}
                    <p className="mb-2">{truncateString(post.content, 73)}</p>
                    <Link
                      to={`/teacher/detail/${post?.author?.id}`}
                      className="hover fw-bold mt-4"
                    >
                      {post?.author.name}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
      }
    </>
  );
};
export default FeaturedPosts;
