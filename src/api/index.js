
const paramsDefault = {
  baseUrl: "http://192.168.1.91",
  method: "get",
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
    // "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
  },
  data: {},
}
/**
 * http请求
 * @param {String} url 请求地址
 * @param {Object} params 配置项
 */
// 公共接口
function api(url: String, params: Object = paramsDefault): Promise {

  let { baseUrl, method, data, headers } = params;

  return fetch(baseUrl + url, {
    method,
    headers,
    body: () => {
      if (typeof data === 'object') {
        return JSON.stringify(data);
      } else {
        return data;
      }
    },
  }).then(response => response.json())

}

export {
  api,
}