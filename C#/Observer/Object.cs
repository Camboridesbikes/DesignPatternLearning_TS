using System;

namespace ObserverPattern{

    public interface Observer{
        public void update();
    }

    public class ConcreteObserver : Observer{

        private Subject subject;
        private string name;

        public ConcreteObserver(string name, Subject subject){
            this.name = name;
            this.subject = subject;
            subject.registerObserver(this);
        }

        public void update(){
            Console.WriteLine(name + "has updated...");
        }

        public void start(Subject subject){
            this.subject = subject;
            subject.registerObserver(this);
        }

        public void stop(){
            subject.removeObserver(this);
            this.subject = null;
        }
    }
}