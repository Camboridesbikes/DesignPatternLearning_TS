"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Singleton {
    //singleton constructor should be privatet o avoid direct construction calls with 'new'
    constructor() { }
    static getInstance() {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
    //singleton should define some logic that can be executed on it's instance
    doStuff() {
        //...
    }
}
exports.default = Singleton;
