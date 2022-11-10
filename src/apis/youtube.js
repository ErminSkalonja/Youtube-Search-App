import axios from "axios";

const KEY = "AIzaSyA5-wZllFesa3UGZ0jVy4ybnws-sWDbPNw";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
