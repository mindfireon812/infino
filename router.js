/**
 * custom router
 */
exports.setAPIRoutes = setAPIRoutes;
function setAPIRoutes() {
    this.router = {};
}

setAPIRoutes.prototype.addRoute = function (httpVerb, path, handler) {
    if (!this.router[httpVerb]) {
        this.router[httpVerb] = {}
    }
    this.router[httpVerb][path] = handler;
}
setAPIRoutes.prototype.parse = function (httpVerb, path, handler) {
    if (this.router[httpVerb] && this.router[httpVerb][path]) {
        this.router[httpVerb][path]();
    } else { throw new RangeError('no routes'); }
}