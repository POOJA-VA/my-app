import ApiConfig from "./apiConfig";
import ApiHandler from "./apiHandler";

// Common Handler
const withCompat = (axiosPromise, callback) => {
  if (callback) {
    axiosPromise
      .then((response) => ApiHandler.response(response, callback))
      .catch((error) => ApiHandler.error(error, callback));
  }
  return axiosPromise.then((res) => res.data);
};

// GET
const get = (endpoint, params = {}, callback) => {
  const instance = ApiConfig.requestConfig();
  const req = instance.get(endpoint, { params });
  return withCompat(req, callback);
};

// POST
const post = (endpoint, data = {}, callback) => {
  const instance = ApiConfig.requestConfig();
  const req = instance.post(endpoint, data);
  return withCompat(req, callback);
};

// PUT
const put = (endpoint, data = {}, callback) => {
  const instance = ApiConfig.requestConfig();
  const req = instance.put(endpoint, data);
  return withCompat(req, callback);
};

// PATCH
const patch = (endpoint, data = {}, callback) => {
  const instance = ApiConfig.requestConfig();
  const req = instance.patch(endpoint, data);
  return withCompat(req, callback);
};

// DELETE
const remove = (endpoint, callback) => {
  const instance = ApiConfig.requestConfig();
  const req = instance.delete(endpoint);
  return withCompat(req, callback);
};

// FORM DATA
const postForm = (endpoint, data = {}, files = {}, callback) => {
  const instance = ApiConfig.requestConfig(true);
  const formData = createFormData(files, data);
  const req = instance.post(endpoint, formData);
  return withCompat(req, callback);
};

// Create FormData
const createFormData = (files = {}, body = {}) => {
  const data = new FormData();

  // Files
  Object.keys(files).forEach((key) => {
    const fileArray = Array.isArray(files[key]) ? files[key] : [files[key]];

    fileArray.forEach((file) => {
      if (file) {
        data.append(key, file);
      }
    });
  });

  // Body
  Object.keys(body).forEach((key) => {
    if (body[key] !== undefined && body[key] !== null) {
      data.append(key, body[key]);
    }
  });

  return data;
};

const ApiClient = {
  get,
  post,
  put,
  patch,
  remove,
  postForm,
};

export default ApiClient;
