export default class Singleton {
    private static instance : Singleton;

    //singleton constructor should be privatet o avoid direct construction calls with 'new'
    private constructor() {}

    public static getInstance() : Singleton {
        if(!Singleton.instance){
            Singleton.instance = new Singleton();
        }

        return Singleton.instance;
    }

    //singleton should define some logic that can be executed on it's instance
    public doStuff(){
        //...
    }
}