module.exports = async (req, res, next) => {
    try {
        await req.ApiPack.checkRoute();
        if (req.ApiPack.errors("routeChecker").length) {
            return res
                .status(req.ApiPack.operation.status || 401)
                .send(req.ApiPack.errors("routeChecker"));
        }
        next();
    } catch(e) {
        return res.status(500).send({
            message: e.toString()
        });
    }
};
