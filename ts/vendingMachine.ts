/// <reference path="./coin.ts" />

class VendigMacihne {
    // private paid = 0;whitout knockout plain typescript
    private paid = ko.observable(0);
    acceptCoin = (coin: Quater): void => {
        // this.paid = this.paid + coin.Value; whitout knockout
        // var element = document.getElementById("total");
        // element.innerHTML = this.paid.toString();

        let oldTotal = this.paid();
        this.paid(oldTotal + coin.Value)
    }
}