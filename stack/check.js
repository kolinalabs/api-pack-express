module.exports = async (req, res, next) => {
  try {
    await req.ApiPack.check();
    if (req.ApiPack.errors("checker").length) {
      return res
        .status(req.ApiPack.operation.status || 401)
        .send(req.ApiPack.errors("checker"));
    }
    next();
  } catch(e) {
    return res.status(500).send({
        message: e.toString()
    });
  }
};
