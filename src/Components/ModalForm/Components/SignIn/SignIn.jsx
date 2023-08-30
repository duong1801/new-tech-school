import React, { useState, useEffect } from "react";
import logo from "../../logo-tech2.svg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { LoginSchema } from "../../Schema/ModalFormSchema";
import { BsFacebook, BsGoogle, BsGithub } from "react-icons/bs";
import { useDispatch } from "react-redux";
import {
  closeModalForm,
  switchToSignIn,
} from "../../../../Slice/ModalFormSlice";
import { userLogin } from "../../../../Slice/UserSlice";
import { axiosClient } from "../../../../Configs/tech2ApiClient";

function SignIn({ setToggleForgotPassword }) {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(LoginSchema),
  });
  const onSubmit = async (user) => {
    // console.log(data);
    const data = {
      email: user.email,
      password: user.password,
    };
    if (data) {
      let result = await dispatch(userLogin(data))

      if (result?.payload?.hasOwnProperty('access_token')) {
        toast.success("Đăng nhập thành công");
        dispatch(closeModalForm())
      }
      if (result?.payload === undefined) {
        toast.error("Đăng nhập thất bại");
      }
      // try {
      //   toast.success("Đăng nhập thành công");

      // } catch (error) {
      //   console.log(error)
      // }
    }
  };


  const dispatch = useDispatch();
  const toSignIn = () => {
    const actionToSignIn = switchToSignIn();
    dispatch(actionToSignIn);
  };

  useEffect(() => {
    let condition = Object.keys(errors).length !== 0;
    if (condition) {
      for (const key in errors) {
        if (errors.hasOwnProperty(key)) {
          toast.error(errors[key].message);
        }
      }
    }
  }, [errors]);
  return (
    <div className="form-container sign-in-container">
      <form
        className="needs-validation"
        onSubmit={handleSubmit(onSubmit)}
        action="#"
        noValidate
      >
        <img className="modal-form-logo" src={logo} alt="" />
        <h1>Đăng nhập</h1>
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
        <span>hoặc sử dụng tài khoản sẵn có</span>
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
        <a
          className="text-decoration-none"
          onClick={() => setToggleForgotPassword(true)}
          href="#!"
        >
          Quên mật khẩu
        </a>
        <button type="submit" className="my-2">
          Đăng nhập
        </button>
        <div className="signIn--mobile mt-2">
          <p>Hoặc đăng ký tài khoản</p>
          <div className="btn btn-warning mt-3" onClick={() => toSignIn()}>
            Đăng ký
          </div>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
