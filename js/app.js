var Quater = (function () {
    function Quater() {
        this.value = .25;
    }
    Object.defineProperty(Quater.prototype, "Value", {
        get: function () {
            return this.value;
        },
        enumerable: true,
        configurable: true
    });
    Quater.prototype.getImageUrl = function () {
        return "../image/Quater.png";
    };
    return Quater;
}());
// var coin = new Quater();
// var value = coin.Value; 
/// <reference path="./coin.ts" />
var VendigMacihne = (function () {
    function VendigMacihne() {
        var _this = this;
        this.paid = 0;
        this.acceptCoin = function (coin) {
            _this.paid = _this.paid + coin.Value;
            var element = document.getElementById("total");
            element.innerHTML = _this.paid.toString();
        };
    }
    return VendigMacihne;
}());
/// <reference path="vendingMachine.ts" />
var machine = new VendigMacihne();
//# sourceMappingURL=app.js.map