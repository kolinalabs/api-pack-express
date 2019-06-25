module.exports = async (req, res, next) => {
  try {
    await req.ApiPack.serialize();
    next();
  } catch(e) {
    return res.status(500).send({
        message: e.toString()
    });
  }
};
