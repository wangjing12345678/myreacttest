
import request from "../utils/request";

/**
 * 需求论证列表
 * */
export const testApi = (params) => {
  return request({
    url: `http://192.168.101.126:8888/api`,
    method: "GET",
    params,
  });
};

export const filmList = (params) => {
  return request({
    url: `http://127.0.0.1:8888/`,
    method: "GET",
    params,
  });
};

export const testJson = (params) => {
  return request({
    baseURL:'http://localhost:3000',
    url: `aa.json`,
    method: "GET",
    params,
  });
};