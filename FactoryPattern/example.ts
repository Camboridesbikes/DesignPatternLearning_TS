import Factory from "./factory"; 
import {Product, ProductTypes} from './products';

const product1 : Product = Factory.createProduct(ProductTypes.ONE); 

const product2 : Product = Factory.createProduct(ProductTypes.TWO);

product1.run();
product2.run();