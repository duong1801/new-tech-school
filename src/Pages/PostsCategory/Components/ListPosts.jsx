import { Col, Container, Row } from "react-bootstrap";
import RenderPosts from "../../Posts/Components/RenderPosts";

const ListPosts = ({ postsCategory }) => {
  return (
    <div className="pt-4">
      <h2 className="post-category-name">
        {postsCategory?.name}
      </h2>
      <p className="post-category-description my-3">
        {
          postsCategory?.description
        }
      </p>
      {/* {postsCategory?.map((posts) => (
        <Container key={posts.id}>
          <Row>
            <Col xs={12}>
              {posts.posts?.map((post) => (
                <RenderPosts {...post} key={post.id} />
              ))}
            </Col>
          </Row>
        </Container>
      ))} */}
    </div>
  );
};
export default ListPosts;
