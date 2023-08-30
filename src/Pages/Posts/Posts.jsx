import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { fetchSortClickPosts, fetchSortPosts } from "../../Slice/PostsSlice";

import IsLoadingPosts from "../../Components/IsLoading/IsLoadingPosts";
import Pagination from "../../Components/Pagination/Pagination";
import Header from "../../Layouts/Header/Header";
import CategorySidebar from "./Components/CategorySidebar";
import RenderPosts from "./Components/RenderPosts";
import SortPosts from "./Components/SortPosts";
import "./Posts.scss";
import "./PostsResponsive.scss";


const Posts = () => {
  // const [sortValue, setSortValue] = useState("latest")



  let [searchParams, setSearchParams] = useSearchParams();
  let userSearchToPage = +searchParams.get("page");

  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.posts.sortPosts);

  const listSortPosts = useSelector((state) => state.posts.sortPosts.listSortPosts?.data);
  let startPage = 1
  let totalPage = useSelector((state) => state.posts.sortPosts.listSortPosts?.meta?.total);


  useEffect(() => {

    async function getPosts() {
      let action = await dispatch(fetchSortPosts(userSearchToPage))
      let result = await action.payload
      let firstPage = 1;

      if (userSearchToPage <= 0 || isNaN(userSearchToPage) || result.statusCode === 500) {
        setSearchParams({ page: firstPage })
        dispatch(fetchSortPosts(firstPage))
      }
    }
    getPosts();


    // // first default sort post
    // if (userSearchToPage <= 0 || isNaN(userSearchToPage) || userSearchToPage > totalPage) {
    //   setSearchParams({
    //     page: startPage,
    //     // sort: sortValue
    //   })
    //   console.log('ok');
    //   dispatch(fetchSortPosts(startPage))
    // }
    // else if (userSearchToPage <= totalPage) {
    //   setSearchParams({
    //     page: +userSearchToPage,
    //     // sort: sortValue
    //   })
    //   // switch (sortValue) {
    //   //   case 'latest':
    //   //     dispatch(fetchSortPosts(userSearchToPage))
    //   //     break;
    //   //   case 'most-interest':
    //   //     dispatch(fetchSortClickPosts(userSearchToPage))
    //   //     break;
    //   // }
    //   console.log('ok');
    //   dispatch(fetchSortPosts(userSearchToPage))
    // }
  }, [userSearchToPage]);


  const handleChangePage = (page) => {
    setSearchParams({ page })
    window.scrollTo({
      top: 0,
      behavior: "instant"
    });
  }


  return (
    <div className="posts">
      <div className="middle-sidebar-bottom background-whiteGray">
        <div className="py-4">
          <Container>
            <Row>
              <Col lg={9}>
                {
                  isLoading
                    ?
                    <IsLoadingPosts />
                    :
                    <>
                      {
                        listSortPosts?.map((post) => (
                          <RenderPosts {...post} key={post.id} />
                        ))
                      }
                      <Pagination startPage={startPage} totalPage={totalPage} handleChangePage={handleChangePage} userSearchToPage={userSearchToPage} />
                    </>
                }
              </Col>
              <Col xs={3}>
                <div className="position-fixed">
                  { !isLoading && <CategorySidebar /> }
                  {/* {
                        !isLoading && <SortPosts sortValue={sortValue} setSortValue={setSortValue} setSearchParams={setSearchParams} />
                      } */}
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
};
export default Posts;