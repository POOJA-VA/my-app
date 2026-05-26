const error = (err, callback) => {
  let customError = { code: err.status };
  if (err.response) {
    customError = { ...customError, ...err.response.data };
  }
  logError(err);
  callback && callback(null, customError);
};

const response = (res, callback) => {
  if (res?.data) {
    logSuccess(res);
    callback && callback(res.data, null);
  } else {
    error({ status: 1 }, callback); // Empty Data
  }
};

const logError = () => {
  // Log error here
};

const logSuccess = () => {
  // Log success here
};

const ApiHandler = {
  error,
  response,
};

export default ApiHandler;
