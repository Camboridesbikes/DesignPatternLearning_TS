using System;

using Singleton;
using ObserverPattern;

namespace c_
{
    class Program
    {
        static void Main(string[] args)
        {
            #region  Singleton
            Console.WriteLine("\n================================\nSingleton Design Pattern\n================================\n");
            BasicSingleton s1 = BasicSingleton.getInstance();
            BasicSingleton s2 = BasicSingleton.getInstance();
            
            Console.WriteLine();

            s1.BusinessLogic();
            s2.BusinessLogic();
            
            Console.WriteLine();

            if(s1 == s2)
            {
                Console.WriteLine("Singleton works! Both vars point to the same instance");
            }
            else
            {
                Console.WriteLine("Singleton Failed... Vars point to different instances");
            }

            #endregion

            #region Observer
                Console.WriteLine("\n================================\nObserver Design Pattern\n================================\n");

                ConcreteSubject subject = new ConcreteSubject();

                ConcreteObserver observerOne = new ConcreteObserver("observerOne", subject);
                ConcreteObserver observerTwo = new ConcreteObserver("observerTwo", subject);

                subject.notifyObservers();

                observerOne.stop();

                subject.notifyObservers();

            #endregion

             #region Decorator
                Console.WriteLine("\n================================\nDecorator Design Pattern\n================================\n");

                Console.WriteLine("Creating base class");
                DecoratorPattern.BaseComponent decoratorComponent = new DecoratorPattern.ConcreteComponent("compy");

                Console.WriteLine("component name: " + decoratorComponent.getName());
                Console.WriteLine("component value: {0}", decoratorComponent.getValue());
                Console.WriteLine("");

                Console.WriteLine("Adding decorator to base class");
                decoratorComponent = new DecoratorPattern.ConcreteDecorator("decorated", decoratorComponent);

                Console.WriteLine("component name: " +  decoratorComponent.getName());
                Console.WriteLine("component value: {0}", decoratorComponent.getValue());
                Console.WriteLine("");                

            #endregion
        }
    }
}
