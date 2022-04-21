"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//#region Factory
console.log("================================\nFACTORY PATTERN\n");
const factory_1 = __importDefault(require("./FactoryPattern/factory"));
const products_1 = require("./FactoryPattern/products");
const product1 = factory_1.default.createProduct(products_1.ProductTypes.ONE);
const product2 = factory_1.default.createProduct(products_1.ProductTypes.TWO);
product1.run();
product2.run();
//#endregion
