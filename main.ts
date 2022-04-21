//#region Factory
console.log("================================\nFACTORY PATTERN\n")

import Factory from "./FactoryPattern/factory"; 
import {Product, ProductTypes} from './FactoryPattern/products';

const product1 : Product = Factory.createProduct(ProductTypes.ONE); 

const product2 : Product = Factory.createProduct(ProductTypes.TWO);

product1.run();
product2.run();

//#endregion