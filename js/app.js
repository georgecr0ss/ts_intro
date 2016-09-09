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
        // private paid = 0;whitout knockout plain typescript
        this.paid = ko.observable(0);
        this.acceptCoin = function (coin) {
            // this.paid = this.paid + coin.Value; whitout knockout
            // var element = document.getElementById("total");
            // element.innerHTML = this.paid.toString();
            var oldTotal = _this.paid();
            _this.paid(oldTotal + coin.Value);
        };
    }
    return VendigMacihne;
}());
/// <reference path="vendingMachine.ts" />
/// <reference path="typings/knockout.d.ts" />
var machine = new VendigMacihne();
ko.applyBindings(machine);
//# sourceMappingURL=app.js.map