import React from 'react';
import { BsArrowLeft } from "react-icons/bs";
function ForgotPassword({ closeForgotPasswordForm }) {
    return (
        <div className="modal-form forgot-password">
            <div className='form-container'>
                <form>
                    <div>
                        <BsArrowLeft onClick={() => closeForgotPasswordForm()} className="back-icon" />
                        <span>Vui lòng nhập email để chúng tôi sẽ gửi cho bạn liên kết để đặt lại mật khẩu</span>
                        <input type="email" placeholder="Email của bạn" />
                        <div>
                            <button>Gửi</button>
                            <button>Hủy</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ForgotPassword;