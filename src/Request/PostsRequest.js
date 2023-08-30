import tech2ApiClient from "../Configs/tech2ApiClient";


const postsRequest = {
  sortPostsDesc(page) {
    const url = `article/latest?page=${page}`;
    return tech2ApiClient.get(url)
  },
  sortPostsHomeDesc() {
    const url = "article/featured";
    return tech2ApiClient.get(url);
  },
  getPostDetail(id) {
    const url = `/article/detail/${id}`;
    return tech2ApiClient.get(url);
  },
};

export default postsRequest;
