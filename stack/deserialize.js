/**
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
module.exports = async (req, res, next) => {
  try {
    await req.ApiPack.deserialize(req.body);
    next();
  } catch(e) {
    return res.status(500).send({
        message: e.toString()
    });
  }
};
