/// <reference path="products.ts" />


class productFacotry {
    static GetProduct(): CocaCola {
        return new CocaCola();
    }
}