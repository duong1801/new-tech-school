import tech2ApiClient from "../Configs/tech2ApiClient";
const searchRequest = {
  getSeachResult(param) {
    const url = `search/?keyword=${param}`;
    return tech2ApiClient.get(url);
  },
};

export default searchRequest;
