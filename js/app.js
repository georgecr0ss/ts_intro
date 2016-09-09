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
    Quater.prototype.getImgUrl = function () {
        return "./image/Quater.png";
    };
    return Quater;
}());
// var coin = new Quater();
// var value = coin.Value; 
var SodaCatogry = (function () {
    function SodaCatogry() {
        this.name = "Soda";
    }
    SodaCatogry.prototype.getImgUrl = function () {
        return "./image/SodaCan.png";
    };
    return SodaCatogry;
}());
/// <reference path="productCategory.ts" />
var CocaCola = (function () {
    function CocaCola() {
        this.name = "Coca-Cola";
        this.price = 2.30;
        this.category = new SodaCatogry();
    }
    return CocaCola;
}());
/// <reference path="products.ts" />
var productFacotry = (function () {
    function productFacotry() {
    }
    productFacotry.GetProduct = function () {
        return new CocaCola();
    };
    return productFacotry;
}());
/// <reference path="./coin.ts" />
/// <reference path="./products.ts" />
/// <reference path="./productFactory.ts" />
var VendigMacihneSize;
(function (VendigMacihneSize) {
    VendigMacihneSize[VendigMacihneSize["small"] = 6] = "small";
    VendigMacihneSize[VendigMacihneSize["medium"] = 9] = "medium";
    VendigMacihneSize[VendigMacihneSize["large"] = 12] = "large";
})(VendigMacihneSize || (VendigMacihneSize = {}));
var Cell = (function () {
    function Cell(product) {
        this.product = product;
        this.stock = ko.observable(3);
        this.sold = ko.observable(false);
    }
    return Cell;
}());
var VendigMacihne = (function () {
    function VendigMacihne() {
        var _this = this;
        // private paid = 0;whitout knockout plain typescript
        this.paid = ko.observable(0);
        this.cells = ko.observableArray([]);
        this.acceptedCoins = [new Quater()];
        this.acceptCoin = function (coin) {
            // this.paid = this.paid + coin.Value; whitout knockout adding coins
            // var element = document.getElementById("total");
            // element.innerHTML = this.paid.toString();
            var oldTotal = _this.paid();
            _this.paid(oldTotal + coin.Value);
        };
    }
    Object.defineProperty(VendigMacihne.prototype, "size", {
        set: function (givenSize) {
            this.cells([]);
            for (var index = 0; index < givenSize; index++) {
                var product = productFacotry.GetProduct();
                this.cells.push(new Cell(product));
            }
        },
        enumerable: true,
        configurable: true
    });
    return VendigMacihne;
}());
/// <reference path="vendingMachine.ts" />
/// <reference path="typings/knockout.d.ts" />
var machine = new VendigMacihne();
machine.size = VendigMacihneSize.medium;
ko.applyBindings(machine);
//# sourceMappingURL=app.js.map