"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const products_1 = require("./products");
class Factory {
    static createProduct(type) {
        switch (type) {
            case products_1.ProductTypes.ONE:
                return new products_1.ProductOne();
            case products_1.ProductTypes.TWO:
                return new products_1.ProductTwo();
        }
    }
}
exports.default = Factory;
