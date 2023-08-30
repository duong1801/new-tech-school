import { useEffect } from "react";
import { Col, Container, Modal, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { BiArrowBack } from "react-icons/bi";
import { closeModalPayment } from "../../Slice/ModalPayment";
import { fetchPayments } from "../../Slice/PaymentsSlice";
import PaymentLeft from "./Components/PaymentLeft";
import PaymentRight from "./Components/PaymentRight";
import "./ModalPayment.scss";

const ModalPayment = (props) => {
  const {  discount,
    price,
    release,
    totalVideo,
    teachers,
    image,
    name
  } = props
  const dispatch = useDispatch();
  const modalPayment = useSelector((state) => state.modalPayment.isOpen);

  const handleClose = () => {
    dispatch(closeModalPayment());
  };

  return (
    <Modal
      className="modal-form-wrapper"
      show={modalPayment}
      onHide={handleClose}>
      <Modal.Body className="payment" id="modal-form">
        <Container>
          <Row>
            <Col xs={4} className="p-0">
              <PaymentLeft
                discount={discount}
                price={price}
                release={release}
                totalVideo={totalVideo}
                author={teachers}
                image={image}
                title={name}
              />
              <span
                className="d-flex align-items-center border py-2 justify-content-center come-back rounded-2 "
                onClick={handleClose}>
                <BiArrowBack className="me-2" />
                Quay lại
              </span>
            </Col>
            <Col xs={8}>
              <PaymentRight {...props} />
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
};
export default ModalPayment;
