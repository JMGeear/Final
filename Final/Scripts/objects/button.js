var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // Button Class
    var button = (function (_super) {
        __extends(button, _super);
        function button(x, y, buttonIDString) {
            _super.call(this, buttonIDString, game);
            this.x = x;
            this.y = y;
            this.setButtonListeners();
        }
        button.prototype.setButtonListeners = function () {
            this.cursor = 'pointer';
            this.on('rollover', this.onButtonOver);
            this.on('rollout', this.onButtonOut);
        };

        button.prototype.onButtonOver = function () {
            this.alpha = 0.8;
        };

        button.prototype.onButtonOut = function () {
            this.alpha = 1;
        };
        return button;
    })(objects.GameObject);
    objects.button = button;
})(objects || (objects = {}));
//# sourceMappingURL=button.js.map
