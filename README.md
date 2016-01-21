#JS-monads-part1 

The monads now map values, instead of monads, to monads. The functions I use here return new monads. They don't mutate them. Functions can be defined however you like, but for my purposes, "m.bnd(f, ...args)" no longer replaces the value in m or any other monad. "m.bnd(f)" results in a new monad with value f(m.x) where f is a function, m is a monad, and m.x is the value of m. 

There is now a function named "ret" which performs like Haskell's "return", and named monads still have a "ret" method for replacing their values, but it doesn't actually replace values. The monad's identifyer is reasigned to a new monad with the desired value. 

The project stresses chains and trees of anonymous monads that don't release values into the global environment unless and until they are required to do so.




