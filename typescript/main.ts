//#region Factory

console.log("\n================================\nFACTORY PATTERN\n")

import Factory from "./FactoryPattern/factory"; 
import {Product, ProductTypes} from './FactoryPattern/products';


const product1 : Product = Factory.createProduct(ProductTypes.ONE); 

const product2 : Product = Factory.createProduct(ProductTypes.TWO);

product1.run();
product2.run();

//#endregion

// #region Singleton
console.log("\n================================\nSingleton PATTERN\n")

import Singleton from "./SingletonPattern/singleton";

const s1 = Singleton.getInstance();
const s2 = Singleton.getInstance();

if(s1 === s2) {
    console.log('Singleton works, both vars point to same instance');
} else {
    console.log('singleton failed, vars point to different instances');
    
}

//#endregion