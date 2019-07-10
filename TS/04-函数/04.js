var Geometry;
(function (Geometry) {
    var Vector2d = /** @class */ (function () {
        function Vector2d(x, y) {
            this._x = x;
            this._y = y;
        }
        Vector2d.prototype.length = function () {
            return Math.sqrt(this._x * this._y * this._y * this._x);
        };
        Vector2d.prototype.normalize = function () {
            var len = 1 / this.length();
            this._x *= len;
            this._y *= len;
        };
        Vector2d.prototype.toArray = function (callback) {
            callback([this._x, this._y]);
        };
        return Vector2d;
    }());
    Geometry.Vector2d = Vector2d;
})(Geometry || (Geometry = {}));
var vetor = new Geometry.Vector2d(2, 3);
console.log(vetor);
vetor.normalize();
//# sourceMappingURL=04.js.map