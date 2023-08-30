import { truncateString } from "../../../../ultils";

const text = {
  content:
    "Index là một cấu trúc dữ liệu được dùng để định vị và truy cập nhanh nhất vào dữ liệu trong các bảng database. Vì vậy, Index là một cách tối ưu hiệu suất truy vấn database bằng việc giảm lượng truy cập vào bộ nhớ khi thực hiện truy vấn. Vậy Index có cấu trúc như thế nào, có những phân loại nào và sử dụng như thế nào cho hiệu quả, hãy cùng đến với bài viết của tác giả Hau Nguyen để được giải đáp những thắc mắc này nhé!",
};

const NotificationBlock = () => (
  <div className="border rounded-3 px-3 py-2 mb-2">
    <p className="mb-2 fw-semibold">Tên thông báo</p>
    <span className="message-content">{truncateString(text.content, 50)}</span>
  </div>
);

const Notification = () => {
  return (
    <>
      <h5>Thông báo</h5>
      <NotificationBlock />
      <NotificationBlock />
      <NotificationBlock />
      <NotificationBlock />
      <NotificationBlock />
      <NotificationBlock />
      <NotificationBlock />
      <NotificationBlock />
      <NotificationBlock />
      <NotificationBlock />
      <NotificationBlock />
      <NotificationBlock />
      <NotificationBlock />
      <NotificationBlock />
      <NotificationBlock />
      <NotificationBlock />
      <NotificationBlock />
      <NotificationBlock />
      <NotificationBlock />
      <NotificationBlock />
      <NotificationBlock />
      <NotificationBlock />
      <NotificationBlock />
      <NotificationBlock />
      <NotificationBlock />
      <NotificationBlock />
      <h6 className="text-center">tất cả thông báo</h6>
    </>
  );
};
export default Notification;
