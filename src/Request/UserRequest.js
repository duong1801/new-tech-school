import tech2ApiClient from "../Configs/tech2ApiClient";

const userRequest = {
    getRegister(data){
        const url = `register`;
        return tech2ApiClient.post(url,data)
    },
    getLogin(data){
        const url = `login`;
        return tech2ApiClient.post(url,data)
    },
    getUserInfo(){
        const url = `user`;
        return tech2ApiClient.get(url);
    },
    getNewAccessTokenWithRefreshToken(){
      const url = `refresh-token`;
      return tech2ApiClient.post(url,{})
    }
}

export default userRequest;