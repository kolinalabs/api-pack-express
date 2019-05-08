/**
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
module.exports = async (req, res, next) => {
  await req.ApiPack.read();
  next();
};
