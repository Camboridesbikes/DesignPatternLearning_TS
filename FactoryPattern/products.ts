export interface Product{
    label : String;
    run() : void;
}

export enum ProductTypes {
    ONE,
    TWO
}

export class ProductOne implements Product{
    label: String
    constructor(){
        this.label = "This is product one."; 
    }   

    run(): void{
        console.log(this.label)
    }

}
export class ProductTwo implements Product{
    label: String
    constructor(){
        this.label = "This is product two."; 
    }   

    run(): void{
        console.log(this.label)
    }

}