module.exports = async (req, res, next) => {
  await req.ApiPack.validate();
  if (req.ApiPack.errors("validator").length) {
    return res
      .status(req.ApiPack.operation.status || 400)
      .send(req.ApiPack.errors("validator"));
  }
  next();
};
