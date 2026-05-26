// // src/api/apiConfig.js
// import axios from "axios";
// import { CONFIG } from "./config";
// // import { message } from "antd";

// // Create a simple subscriber
// // let onAuthError;
// // let authErrorTriggered = false;
// // export const setOnAuthError = (callback) => {
// //   // onAuthError = callback;
// //   // authErrorTriggered = false; // reset when setting new callback
// // };

// const requestConfig = (isForm = false) => {
//   const instance = axios.create({
//     baseURL: CONFIG.API_BASE_URL,
//     timeout: CONFIG.TIMEOUT,
//     headers: {
//       "Content-Type": isForm ? "multipart/form-data" : "application/json",
//     },
//     withCredentials: true,
//   });

//   // === Request interceptor: attach accessToken ===
//   // instance.interceptors.request.use(
//   //   (config) => {
//   //     const token = useUserStore.getState().accessToken;
//   //     if (token) config.headers["Authorization"] = `Bearer ${token}`;
//   //     return config;
//   //   },
//   //   (error) => Promise.reject(error),
//   // );

//   // === Response interceptor: handle 401 or other global cases ===
//   // instance.interceptors.response.use(
//   //   (response) => {
//   //     // ✅ Check for refreshed token header
//   //     const refreshedToken = response.headers["x-refreshed-token"];
//   //     if (refreshedToken) {
//   //       useUserStore.getState().setUser(
//   //         useUserStore.getState().user, // keep existing user
//   //         refreshedToken, // update only token
//   //       );
//   //     }

//   //     // ✅ Global status check
//   //     if (response.data && response.data.status === false) {
//   //       message.error({
//   //         content: response.data.message || "Something went wrong",
//   //         duration: 3, // seconds
//   //       });
//   //     }
//   //     return response;
//   //   },
//   //   (error) => {
//   //     // Check if error response actually contains success message
//   //     // Some APIs return 4xx/5xx status codes even for successful operations
//   //     const errorData = error.response?.data;
//   //     if (errorData?.message?.toLowerCase()?.includes("successfully")) {
//   //       console.log(
//   //         "🔄 API returned error status but success message, treating as success",
//   //       );
//   //       // Convert error to success by returning the response
//   //       return Promise.resolve(error.response);
//   //     }

//   //     if (
//   //       error.response?.status === 403 ||
//   //       error.response?.status === 401 ||
//   //       (onAuthError && authErrorTriggered)
//   //     ) {
//   //       authErrorTriggered = true; // prevent multiple triggers
//   //       onAuthError(); // navigate to login
//   //     }
//   //     return Promise.reject(error);
//   //   },
//   // );

//   return instance;
// };

// const ApiConfig = { requestConfig };
// export default ApiConfig;

import axios from "axios";
import { CONFIG } from "./config";

const requestConfig = () => {
  return axios.create({
    baseURL: CONFIG.API_BASE_URL,
    timeout: CONFIG.TIMEOUT,
    headers: {
      "Content-Type": "application/json",
    },
  });
};

const ApiConfig = { requestConfig };

export default ApiConfig;
