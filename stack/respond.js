module.exports = async (req, res, next) => {
  res
    .status(req.ApiPack.operation.status || 200)
    .send(req.ApiPack.operation.data);
};
