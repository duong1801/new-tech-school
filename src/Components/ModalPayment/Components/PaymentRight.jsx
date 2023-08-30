import "./PaymentRight.scss";

const CardPayment = ({ name, title }) => (
    <div className="border py-2 px-4 mt-3">
        <span className="name">{name}</span>
        <p className="title fw-bolder">{title}</p>
    </div>
);

const PaymentRight = ({
    image,
    nameAccount,
    numberAccount,
    transferContent,
}) => {
    return (
        <div>
            <div className="d-flex mb-3">
                <div className="img">
                    <img src={image} alt="qr-code" />
                </div>
                <div className="px-2 ms-2 border-start">
                    <p>Buớc 1: Mở app ngần hàng hoặc ví điện tử quét mã QR</p>
                    <p>
                        Bước 2: Đảm bảo nội dung chuyển khoản bao gồm họ tên và
                        số điện thoại
                    </p>
                    <p>Bước 3: Thực hiện thanh toán</p>
                </div>
            </div>
            <span className="name">hoặc thanh toán thủ công</span>
            <div>
                <CardPayment name="Số tài khoản:" title={nameAccount} />
                <CardPayment name="Tên tài khoản:" title={numberAccount} />
                <CardPayment
                    name="Nội dung chuyển khoản:"
                    title={transferContent}
                />
            </div>
            <p className="pt-3">
                Note : Mua xong khóa học nhớ chụp lại Bill và tên khóa học gửi
                cho Page:{" "}
                <a className="adress" href="https://www.facebook.com/tech2software">
                    Tech2 Solutions
                </a>
            </p>
        </div>
    );
};
export default PaymentRight;
