import { ProductOne, ProductTwo, Product, ProductTypes } from "./products";

export default abstract class Factory{
    public static createProduct(type : ProductTypes) : Product{
        switch(type){
            case ProductTypes.ONE:
                return new ProductOne()
            case ProductTypes.TWO:
                return new ProductTwo()
        }
    }
}