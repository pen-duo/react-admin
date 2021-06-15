import axios from "axios";
import { message } from "antd";
const baseUrl = "http://120.55.193.14:5000";
export default function ajax(url, data = {}, type = "GET") {
  return new Promise((resolve, reject) => {
    url = baseUrl + url;
    let promise;
    if (type === "GET") {
      promise = axios.get(url, { params: data });
    } else {
      promise = axios.post(url, data);
    }
    promise
      .then((res) => {
        resolve(res.data);
      })
      .catch((error) => {
        console.log(error);
        message.error("请求出错了:" + error.message);
      });
  });
}
