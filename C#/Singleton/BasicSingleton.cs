/**
    This Singleton pattern is not threadsafe. With multithreading, multiple 
*/

using System;

namespace Singleton
{
    //Sealed modifier keeps other classes from inheriting it
    public sealed class BasicSingleton
    {
        private BasicSingleton()
        {
            //constructor here
            Console.WriteLine("Singleton Created!");
        }

        private static BasicSingleton _instance;

        public static BasicSingleton getInstance()
        {
            Console.WriteLine("GetInstance called...");
            if(_instance == null)
            {
                _instance = new BasicSingleton();
            }

            return _instance;
        }

        public void BusinessLogic()
        {
            Console.WriteLine("Singleton Business stuff");
        }
    }
}