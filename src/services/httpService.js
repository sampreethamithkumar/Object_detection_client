import axios from "axios";

axios.defaults.baseURL = "http://3.135.227.223:5000";

export default {
    post: axios.post,
}