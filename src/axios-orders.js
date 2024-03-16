import axios from "axios";

const instance = axios.create({
  baseURL:
    "https://burger-85329-default-rtdb.asia-southeast1.firebasedatabase.app",
});

export default instance;
