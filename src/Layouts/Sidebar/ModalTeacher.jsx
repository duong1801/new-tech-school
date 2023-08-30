import React from "react";
import Modal from "react-bootstrap/Modal";
import { TiTimes } from "react-icons/ti";
import Skeleton from "react-loading-skeleton";
import { useSelector } from "react-redux";
import ContentNav from "../../Components/NavContent/ContentNav";
import "./SideBar.scss";

function ModalTeacher(props) {
  const { showModal, handleSetModal } = props;
  const authors = useSelector((state) => state.authors.allAuthors.listAuthors);
  const isLoading = useSelector((state) => state.authors.allAuthors.isLoading);
  const isError = useSelector((state) => state.authors.allAuthors.isError);
   
  return (
    <>
      <Modal className="modal-teacher" show={showModal} onHide={() => handleSetModal(false)}>
        <Modal.Body>
          <TiTimes
            className="close-form"
            onClick={() => handleSetModal(false)}
          />
          <div className="nav-list__author">
            <p>Danh sách giảng viên :</p>
            {authors?.map((author) => (
              <ContentNav
                key={author.id}
                author={true}
                isMobile
                {...author}
                handleSetModal={handleSetModal}
              />
            ))}
            <>
              {((isLoading && authors.length === 0) || isError) && (
                <div style={{ marginLeft: "10px" }}>
                  <Skeleton count={3} />
                </div>
              )}
            </>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}


export default ModalTeacher

