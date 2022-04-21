"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const factory_1 = __importDefault(require("./factory"));
const products_1 = require("./products");
const product1 = factory_1.default.createProduct(products_1.ProductTypes.ONE);
const product2 = factory_1.default.createProduct(products_1.ProductTypes.TWO);
product1.run();
product2.run();
