import React from "react"
import { Col, Container, FloatingLabel, Form, Row } from "react-bootstrap"
import { useSelector } from "react-redux"
import "./UserProfile.scss"

const InputCol = ({ title, number, name, type, defaultValue }) => (
  <Col xs={number} className={"mt-3"}>
    <div>
      <p className={"mb-2"}>{title}</p>
      <input
        defaultValue={defaultValue}
        type={type}
        name={name}
        placeholder={`${title}...`}
        className="py-2 px-3"
      />
    </div>
  </Col>
)

function UserProfile() {

  const { userInfo } = useSelector((state) => state.user)

  return (

    <>
      <div className="middle-sidebar-bottom background-whiteGray">
        <div className="py-4">
          <Container>
            <Row>
              <Col xs={4}>
                {/* avatar */}
                <div className="user-image">
                  <div className="user-image-wrapper">
                    <img
                      src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                      alt="user-profile"
                    />
                    {/* <img src="https://firebasestorage.googleapis.com/v0/b/ecommerce-b6786.appspot.com/o/1.jpg?alt=media&token=0eb7db6d-a567-4549-a5ca-901bf7478a9f" alt="" /> */}
                  </div>
                  <button className="tech2-btn text-center">Thay đổi ảnh</button>
                </div>
              </Col>
              <Col xs={8}>
                {/* Input search */}
                <h3>
                  Thông tin tài khoản
                </h3>
                <form className="user-profile-form" action="">
                  <Row>
                    <InputCol title="Họ và tên" number="6" defaultValue={userInfo?.name} />
                    <InputCol title="Tên truy cập" number="6" defaultValue={userInfo?.username} />
                    <InputCol title="Email" number="6" defaultValue={userInfo?.email} />
                    <InputCol title="Số điện thoại" number="6" defaultValue={userInfo?.phone} />
                    <InputCol title="Ngày sinh" number="6" />
                    <div className="mt-4">
                      <Row>
                        <Col xs={6}>
                          <FloatingLabel label=" Tỉnh/Thành Phố">
                            <Form.Select>
                              <option value="Hà Nội">Hà Nội</option>
                              <option value="Đà Nẵng">Đà Nẵng</option>
                              <option value="TP Hồ Chí Minh">
                                TP Hồ Chí Minh
                              </option>
                            </Form.Select>
                          </FloatingLabel>
                        </Col>
                        <Col xs={6}>
                          <FloatingLabel label=" Quận/Huyện">
                            <Form.Select>
                              <option value="Hai Bà Trưng">
                                Hai Bà Trưng
                              </option>
                              <option value="Từ Liêm">Từ Liêm</option>
                              <option value="Thanh Xuân">Thanh Xuân</option>
                            </Form.Select>
                          </FloatingLabel>
                        </Col>
                      </Row>
                    </div>
                  </Row>
                  <FloatingLabel
                    controlId="floatingTextarea2"
                    label="Địa chỉ thường trú"
                    value={userInfo?.address}
                  >
                    <Form.Control
                      as="textarea"
                      placeholder="Leave a comment here"
                      style={{
                        height: "100px",
                        width: "100%",
                        marginTop: "30px",
                      }}
                    />
                  </FloatingLabel>
                </form>
                <div className=" d-flex justify-content-around mt-4 ">
                  <button className="tech2-btn">Cập Nhật</button>
                  <button className="tech2-btn">Đổi mật khẩu</button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  )
}

export default UserProfile
