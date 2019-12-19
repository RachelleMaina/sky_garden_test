import axios from "axios";

const instance = axios.create({
  baseURL:
    "https://skygarden.search.windows.net/indexes/dev-productsv3/docs/search?api-version=2017-11-11",
  headers: {
    "api-key": "4F2408C83BBB69BB31AE97737ED6EE2F",
  },
});
export default instance;
