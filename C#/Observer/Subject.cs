using System;
using System.Collections.Generic;

namespace ObserverPattern {
    public interface Subject {

        public void registerObserver(Observer observer);

        public void removeObserver(Observer observer);

        public void notifyObservers();

    }

    public class ConcreteSubject : Subject {

        private List < Observer > observerList;
        
        public ConcreteSubject() {
            observerList = new List < Observer > ();
        }

        public void registerObserver(Observer observer)
        {
            observerList.Add(observer);
        }

        public void removeObserver(Observer observer)
        {
            observerList.Remove(observer);
        }

        public void notifyObservers()
        {
            observerList.ForEach(action => action.update());
        }

    }
}