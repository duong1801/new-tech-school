import { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import IsLoadingPosts from "../../Components/IsLoading/IsLoadingPosts";
import Header from "../../Layouts/Header/Header";
import { fetchPostsByTag } from "../../Slice/CategorySlice";
import RenderPosts from "../Posts/Components/RenderPosts";
import ListPosts from "../PostsCategory/Components/ListPosts";


const PostsTag = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const { isLoading, postsTag } = useSelector(
    (state) => state.category.postsTag)
  let haveAnyPosts = postsTag?.articles?.length > 0
  useEffect(() => {
    dispatch(fetchPostsByTag(pathname));
  }, []);
  return (
    <div className="posts posts-tag">
      <div className="middle-sidebar-bottom background-whiteGray">
        <div className="pt-4">
          <Container>
            <Row>
              <div className="middle-sidebar-bottom background-whiteGray">
                {
                  isLoading
                    ?
                    <IsLoadingPosts />
                    :
                    <>
                      <ListPosts postsCategory={postsTag} />
                      <h5 className="my-4">{haveAnyPosts ? `Những bài viết liên quan đến ${postsTag?.name}:` : `Chưa có bài viết nào liên quan đến ${postsTag?.name}`}</h5>
                      <>
                        {
                          postsTag?.articles?.map((post) => (
                            <RenderPosts {...post} key={post.id} />
                          ))
                        }
                      </>
                    </>
                }
              </div>
            </Row>
          </Container>
        </div>
      </div>
    </div>
    // <div>
    //   <SideBar />
    //   <div className="middle-sidebar-header padding-left">
    //     <Header />
    //   </div>
    //   <div className="middle-sidebar-bottom padding-left background-whiteGray">
    //     <ListPosts postsCategory={postsCategory} />
    //   </div>
    // </div>
  );
};
export default PostsTag;