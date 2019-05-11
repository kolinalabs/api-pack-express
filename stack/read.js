/**
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
module.exports = async (req, res, next) => {
  req.ApiPack.operation.identifiers = req.params;
  req.ApiPack.operation.context.filters = req.query;
  req.ApiPack.operation.context.query = req.query;

  await req.ApiPack.read();

  if (!req.ApiPack.operation.data && req.method !== "POST") {
    return res.status(404).send({
      message: "Not Found"
    });
  }

  next();
};
