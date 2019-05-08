module.exports = async (req, res, next) => {
  await req.ApiPack.check();
  if (req.ApiPack.errors("checker").length) {
    return res
      .status(req.ApiPack.operation.status || 401)
      .send(req.ApiPack.errors("checker"));
  }
  next();
};
