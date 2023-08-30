import tech2ApiClient from "../Configs/tech2ApiClient";

const authorRequest = {
   getAuthors() {
    const url = "teacher/featured";
    return tech2ApiClient.get(url);
  },
  getAuthor(slug) {
    const url = `${slug}`;
    return tech2ApiClient.get(url);
  },
};

export default authorRequest;
