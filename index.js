const router = require("express").Router();
const Stack = require("./stack");

module.exports = (apiPack, operations) => {
  operations.map(operation => {
    const method = operation.method.toLowerCase();
    router[method](
      operation.path,
      (req, res, next) => {
        operation.context = {
          request: req,
          errors: {
            routeChecker: [],
            checker: [],
            validator: []
          }
        };
        apiPack.operation = operation;
        req.ApiPack = apiPack;
        next();
      },
      Stack
    );
  });
  return router;
};
