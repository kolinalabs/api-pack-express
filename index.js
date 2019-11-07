const router = require("express").Router();
const Stack = require("./stack");

module.exports = (apiPack, operations) => {
  operations.map(operation => {
    const method = operation.method.toLowerCase();
    router[method](
      operation.path,
      async (req, res, next) => {
        operation.context = {
          request: req,
          errors: {
            routeChecker: [],
            checker: [],
            validator: []
          }
        };
        req.ApiPack = apiPack.strictify(operation);
        await next();
      },
      Stack
    );
  });
  return router;
};
