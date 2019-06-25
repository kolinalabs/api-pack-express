module.exports = async (req, res, next) => {
  try {
    await req.ApiPack.validate();
    if (req.ApiPack.errors("validator").length) {
      return res
        .status(req.ApiPack.operation.status || 400)
        .send(req.ApiPack.errors("validator"));
    }
    next();
  } catch(e) {
    return res.status(500).send({
        message: e.toString()
    });
  }
};
