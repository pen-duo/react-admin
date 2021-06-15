import axios from "axios";

const baseUrl = "http://120.55.193.14:5000";
export default function ajax(url, data = {}, type = "GET") {
  url = baseUrl + url;
  if (type === "GET") {
    return axios.get(url, { params: data });
  } else {
    return axios.post(url, data);
  }
}
