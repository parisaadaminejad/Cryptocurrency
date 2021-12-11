import { message } from "antd";
import { create } from "apisauce";
import { baseURL } from "./constants";
message.config({ maxCount: 1 });
const headers = {
  "Accept-Language": "en",
  "Content-Type": "application/json; charset=utf-8; v=1.0",
};
export const api = create({
  baseURL: baseURL,
  headers: headers,
});
api.addResponseTransform((response) => {
  switch (response.status) {
    case 400:
      message.error(response.data.message);
      break;
    case 401:
      break;
    case 403:
      break;
    case 404:
      break;
    case 500:
      break;
  }
  if (response.status === 200) {
    return response;
  } else {
    throw response;
  }
});

export async function getRequest(endPointUrl, queryString) {
  return api.get(endPointUrl, queryString);
}
export async function postRequest(endPointUrl, data) {
  return api.post(endPointUrl, data);
}
export async function putRequest(endPointUrl, data) {
  return api.put(endPointUrl, data);
}
export async function deleteRequest(endPointUrl, queryString) {
  return api.delete(endPointUrl, queryString);
}
