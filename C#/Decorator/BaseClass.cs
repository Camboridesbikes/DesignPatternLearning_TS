using System;

namespace DecoratorPattern{
   public abstract class BaseComponent{
       
       protected string name;

       public virtual string getName() { return name; }

       public abstract int getValue();
    }

    public class ConcreteComponent : BaseComponent{

        public ConcreteComponent(string name) : base() {
            this.name = name;
        }
       

        public override int getValue(){ 
            return 5;
        }
        
    }
}