import tech2ApiClient from "../Configs/tech2ApiClient";

const categoryRequest = {
  getCategory() {
    const url = `/article/categories`;
    return tech2ApiClient.get(url);
  },
  getPostsByCategory(categoryID) {
    const url = `${categoryID}`;
    return tech2ApiClient.get(url);
  },
  getPostsByTag(tagID){
    const url = `${tagID}`;

    return tech2ApiClient.get(url)
  }
};

export default categoryRequest;
