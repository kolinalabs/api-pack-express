module.exports = async (req, res, next) => {
    await req.ApiPack.checkRoute();
    if (req.ApiPack.errors("routeChecker").length) {
        return res
            .status(req.ApiPack.operation.status || 401)
            .send(req.ApiPack.errors("routeChecker"));
    }
    next();
};
