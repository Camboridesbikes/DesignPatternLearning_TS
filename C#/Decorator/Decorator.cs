using System;

namespace DecoratorPattern{
    public abstract class BaseDecorator : BaseComponent{
        public override abstract string getName();
    }

    public class ConcreteDecorator : BaseDecorator{

        BaseComponent baseComponent;
        string name;
        public ConcreteDecorator(string name, BaseComponent baseComponent){
            this.name = name;
            this.baseComponent = baseComponent;
        }
        public override string getName(){
            return baseComponent.getName() + ", " + name;
        }

        public override int getValue()
        {
            return baseComponent.getValue() + 2;
        }
    }
}