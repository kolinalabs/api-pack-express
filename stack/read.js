/**
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
module.exports = async (req, res, next) => {
  /**
   * @todo Add skip process option here
   * suggest: req.ApiPack.receive = false
   */

  await req.ApiPack.read();

  if (!req.ApiPack.operation.data && req.method !== "POST") {
    return res.status(404).send({
      message: "Not Found"
    });
  }

  next();
};
