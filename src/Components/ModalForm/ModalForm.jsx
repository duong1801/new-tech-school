import React, { useState } from 'react';
import './ModalForm.scss'
import { TiTimes } from "react-icons/ti";
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { closeModalForm } from '../../Slice/ModalFormSlice';
import ForgotPassword from './Components/ForgotPassword/ForgotPassword';
import SignUp from './Components/SignUp/SignUp';
import SignIn from './Components/SignIn/SignIn';
import OverlayForm from './Components/OverlayForm/OverlayForm';

function ModalForm(props) {


    const [toggleForgotPassword, setToggleForgotPassword] = useState(false);

    const dispatch = useDispatch();
    const modalForm = useSelector((state) => state.modalForm.isOpen);
    const switchSlide = useSelector((state) => state.modalForm.switchSlide);

    const handleClose = () => {
        const actionCloseModal = closeModalForm()
        dispatch(actionCloseModal)
    };


    const closeForgotPasswordForm = () => {
        setToggleForgotPassword(false)
    }

    return (
        <>
            <Modal className="modal-form-wrapper" show={modalForm} onHide={handleClose}>
                {
                    toggleForgotPassword
                        ?
                        <ForgotPassword closeForgotPasswordForm={closeForgotPasswordForm} />
                        :
                        <Modal.Body className={switchSlide ? `modal-form right-panel-active` : `modal-form`} id="modal-form">
                            <TiTimes className="close-form" onClick={() => handleClose()} />
                            <SignUp />
                            <SignIn setToggleForgotPassword={setToggleForgotPassword} />
                            <OverlayForm />
                        </Modal.Body>
                }
            </Modal>
        </>
    );
}

export default ModalForm;