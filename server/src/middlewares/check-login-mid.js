function checkLoginMiddleware(req, res, next) {
    if (req.session.userId) {
        next();
    } else {
        res.send(JSON.stringify({
            ok: false,
            message: "Unauthorized"
        }));
    }
}