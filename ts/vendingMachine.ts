/// <reference path="./coin.ts" />
/// <reference path="./products.ts" />
/// <reference path="./productFactory.ts" />

enum VendigMacihneSize {
    small = 6,
    medium = 9,
    large = 12
}
class Cell {
    constructor(public product: CocaCola) {

    }
    stock = ko.observable(3);
    sold = ko.observable(false);
}

class VendigMacihne {
    // private paid = 0;whitout knockout plain typescript
    private paid = ko.observable(0);
    cells = ko.observableArray([]);

    set size(givenSize: VendigMacihneSize) {
        this.cells([]);
        for (let index = 0; index < givenSize; index++) {
            let product = productFacotry.GetProduct();  
            this.cells.push(new Cell(product));
        }
    }

    acceptedCoins: Quater[] = [new Quater()];
    acceptCoin = (coin: Quater): void => {
        // this.paid = this.paid + coin.Value; whitout knockout adding coin value
        // var element = document.getElementById("total");
        // element.innerHTML = this.paid.toString();
        let oldTotal = this.paid();
        this.paid(oldTotal + coin.Value)
    }
}