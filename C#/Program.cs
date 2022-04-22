using System;

using Singleton;

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
        }
    }
}
