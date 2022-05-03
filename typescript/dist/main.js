"use strict";
//#region Factory
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
console.log("================================\nFACTORY PATTERN\n");
const factory_1 = __importDefault(require("./FactoryPattern/factory"));
const products_1 = require("./FactoryPattern/products");
const product1 = factory_1.default.createProduct(products_1.ProductTypes.ONE);
const product2 = factory_1.default.createProduct(products_1.ProductTypes.TWO);
product1.run();
product2.run();
//#endregion
// #region Singleton
console.log("\n================================\nSingleton PATTERN\n");
const singleton_1 = __importDefault(require("./SingletonPattern/singleton"));
const s1 = singleton_1.default.getInstance();
const s2 = singleton_1.default.getInstance();
if (s1 === s2) {
    console.log('Singleton works, both vars point to same instance');
}
else {
    console.log('singleton failed, vars point to different instances');
}
//#endregion
