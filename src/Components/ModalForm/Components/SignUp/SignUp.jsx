import React, { useEffect } from "react";
import logo from "../../logo-tech2.svg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { RegisterSchema } from "../../Schema/ModalFormSchema";
import { BsFacebook, BsGoogle, BsGithub } from "react-icons/bs";
import { useDispatch } from "react-redux";
import {
  closeModalForm,
  switchToSignIn,
  switchToSignUp,
} from "../../../../Slice/ModalFormSlice";
import { registerUser } from "../../../../Slice/UserSlice";

function SignUp(props) {
  const dispatch = useDispatch();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(RegisterSchema),
    });
    const onSubmit = async (data) => {
       if(data){
        let result = await dispatch(registerUser(data))

        if (result?.payload?.hasOwnProperty('access_token')) {
          toast.success("Đăng kí thành công");
          dispatch(closeModalForm())
        }
        if (result?.payload === undefined) {
          toast.error("Đăng nhập thất bại");
        }
        // try {
        //   toast.success("Đăng kí thành công")
        //   dispatch(closeModalForm())
        // } catch (error) {
        //   console.log('error');
        // }
       }
    };
    const toSignUp = () => {
        const actionToSignUp = switchToSignUp();
        dispatch(actionToSignUp);
    };
    useEffect(() => {
        let condition = Object.keys(errors).length !== 0;
        if (condition) {
            let length = Object.keys(errors).length;

            for (const key in errors) {
                if (errors.hasOwnProperty(key)) {
                    toast.error(errors[key].message);
                }
            }
        }
    }, [errors]);
    return (
      <div className="form-container sign-up-container">
        <form
          className="needs-validation"
          onSubmit={handleSubmit(onSubmit)}
          action="#"
          noValidate
        >
          <img className="modal-form-logo" src={logo} alt="" />
          <h1>Đăng ký</h1>
          <div className="social-container">
            <a href="#!" className="social">
              <BsFacebook size={30} />
            </a>
            <a href="#!" className="social">
              <BsGoogle size={30} />
            </a>
            <a href="#!" className="social">
              <BsGithub size={30} />
            </a>
          </div>
          <span>Hoặc đăng ký dưới đây</span>
          <input
            className={errors?.name && "form-control is-invalid"}
            type="text"
            placeholder="Họ và tên"
            {...register("name")}
          />
          <input
            className={errors?.phone && "form-control is-invalid"}
            type="text"
            placeholder="Số điện thoại"
            {...register("phone")}
          />
          <input
            className={errors?.email && "form-control is-invalid"}
            type="email"
            placeholder="Email của bạn"
            {...register("email")}
          />
          <input
            className={errors?.password && "form-control is-invalid"}
            type="password"
            placeholder="Mật khẩu"
            {...register("password")}
          />
          <input
            className={errors?.retypePassword && "form-control is-invalid"}
            type="password"
            placeholder="Nhập lại mật khẩu"
            {...register("retypePassword")}
          />
          <button type="submit" className="mt-2">
            Đăng ký
          </button>
          <div className="signIn--mobile mt-2" onClick={() => toSignUp()}>
            <p>Quay lại trang đăng nhập</p>
          </div>
        </form>
      </div>
    );
}

export default SignUp;
