"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductTwo = exports.ProductOne = exports.ProductTypes = void 0;
var ProductTypes;
(function (ProductTypes) {
    ProductTypes[ProductTypes["ONE"] = 0] = "ONE";
    ProductTypes[ProductTypes["TWO"] = 1] = "TWO";
})(ProductTypes = exports.ProductTypes || (exports.ProductTypes = {}));
class ProductOne {
    constructor() {
        this.label = "This is product one.";
    }
    run() {
        console.log(this.label);
    }
}
exports.ProductOne = ProductOne;
class ProductTwo {
    constructor() {
        this.label = "This is product two.";
    }
    run() {
        console.log(this.label);
    }
}
exports.ProductTwo = ProductTwo;
