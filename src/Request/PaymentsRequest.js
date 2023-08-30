import tech2ApiClient from "../Configs/tech2ApiClient";

const paymentsRequest = {
  getPayments() {
    const url = `/payments`;
    return tech2ApiClient.get(url);
  },
};
export default paymentsRequest;
