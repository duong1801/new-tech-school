import React from 'react';
import { useDispatch } from 'react-redux';
import { switchToSignIn, switchToSignUp } from '../../../../Slice/ModalFormSlice';

function OverlayForm(props) {
    const dispatch = useDispatch();
    const toSignIn = () => {
        const actionToSignIn = switchToSignIn()
        dispatch(actionToSignIn)
    }
    const toSignUp = () => {
        const actionToSignUp = switchToSignUp()
        dispatch(actionToSignUp)
    }
    return (
        <div className="overlay-container">
            <div className="overlay">
                <div className="overlay-panel overlay-left">
                    <h1>Chào mừng quay trở lại</h1>
                    <p>Để vào học, hãy đăng nhập</p>
                    <button className="ghost my-3" id="signIn" onClick={() => toSignUp()}>Đăng nhập</button>
                </div>
                <div className="overlay-panel overlay-right">
                    <h1>Xin chào</h1>
                    <p>Nếu bạn chưa có tài khoản, hãy đăng ký</p>
                    <button className="ghost my-3" id="signUp" onClick={() => toSignIn()}>Đăng ký</button>
                </div>
            </div>
        </div>
    );
}

export default OverlayForm;