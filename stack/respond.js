const MethodToCode = {
  post: 201,
  delete: 204
};

/**
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
module.exports = async (req, res, next) => {
  const operation = req.ApiPack.operation;

  const status = operation.status
    ? operation.status
    : MethodToCode[operation.method]
    ? MethodToCode[operation.method]
    : 200;

  res.status(status).send(operation.data);
};
