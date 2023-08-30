import * as yup from "yup";



export const LoginSchema = yup
  .object({
    email: yup.string().required("Vui lòng nhập email"),
    password: yup.string().required("Vui lòng nhập mật khẩu"),
  })
  .required();

export const RegisterSchema = yup
  .object()
  .shape({
    name: yup
      .string()
      .required("Vui lòng nhập họ và tên")
      .test(
        "Vui lòng nhập 2 từ trở lên",
        "Vui lòng nhập 2 từ trở lên",
        (value) => {
          return value.split(" ").length >= 2;
        }
      ),
    phone: yup
      .string()
      .required("Vui lòng nhập số điện thoại")
      .test(
        "Số điện thoại không được có khoảng cách",
        "Số điện thoại phải hơn 11 kí tự",
        (value) => {
          return value.split(" ").length === 1 && value.length > 11;
        }
      ),
    email: yup
      .string()
      .required("Vui lòng nhập email")
      .test("Email không hợp lệ", "Email không hợp lệ", (value) => {
        // validate email, copy regex
        let mailFormat =
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return value.match(mailFormat);
      }),
    password: yup
      .string()
      .required("Vui lòng nhập mật khẩu")
      .test(
        "Mật khẩu cần phải có 6 kí tự trở lên",
        "Mật khẩu cần phải có 6 kí tự trở lên",
        (value) => {
          return value.length >= 6;
        }
      ),
    retypePassword: yup
      .string()
      .required("Vui lòng nhập lại mật khẩu")
      .oneOf([yup.ref("password")], "Mật khẩu không khớp"),
  })
  .required();
