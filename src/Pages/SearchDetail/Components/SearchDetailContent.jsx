import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ContentNav from "../../../Components/NavContent/ContentNav";
import RowCourses from "../../../Components/RenderCourses/RowCourses/RowCourses";
import RenderPosts from "../../Posts/Components/RenderPosts";


export default function SearchDetailContent(props) {
  const [title, setTitle] = useState("");
  useEffect(() => {
    if (props.title === "teachers") {
      setTitle("Giảng viên");

    }
    if (props.title === "articles") {
      setTitle("Bài viết");

    }
    if (props.title === "courses") {
      setTitle("Khóa học");
    }
  }, []);



  return (
    <div className="content__item">
      <h4 className="mb-4">{title}</h4>
      <Container>
        <Row>
          {/* {props.data.map((item) => 
           (  
            <Col xl={3} key={item.id}>
              <div className="content__item--wrap">
                <div className="item__avatar">
                  <img src={item.avatar || item.image} alt="image" />
                </div>
                <p className="item__name">{item.name || item.title}</p>
              </div>
            </Col>
          )
          )} */}
          {(() => {
            if (props.title === "articles") {
              return props?.data.map((post) => (
                <RenderPosts {...post} key={post.id} />)
              )
            }
            // if (props.title === "courses") {
            //   return <RowCourses
            //     isSlide
            //     courses={props?.data}
            //   />
            // }
            if (props.title === "teachers") {
              console.log(props.data);
              return props?.data?.map((author) => (
                <ContentNav key={author.id} author={true} {...author} />
              ))
            }
          })()}
        </Row>
      </Container>
    </div>
  );
}
