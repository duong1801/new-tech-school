import { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import IsLoadingPosts from "../../Components/IsLoading/IsLoadingPosts";
import Header from "../../Layouts/Header/Header";
import { fetchPostsByCategory } from "../../Slice/CategorySlice";
import RenderPosts from "../Posts/Components/RenderPosts";
import ListPosts from "./Components/ListPosts";

const PostsCategory = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();


  const { isLoading, postsCategory } = useSelector(
    (state) => state.category.postsCategory)
  let haveAnyPosts = postsCategory?.article?.length > 0
  useEffect(() => {
    dispatch(fetchPostsByCategory(pathname));
  }, []);
  return (
    <div className="posts posts-category">
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
                      <ListPosts postsCategory={postsCategory} />
                      <h5 className="my-4">{haveAnyPosts ? `Những bài viết liên quan đến ${postsCategory?.name}:` : `Chưa có bài viết nào liên quan đến ${postsCategory?.name}`}</h5>
                      <>
                        {
                          postsCategory?.article?.map((post) => (
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
export default PostsCategory;