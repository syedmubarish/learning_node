#  Module Scope

When we load a module, It is wrapped inside IIFE function. By wrapping it in IIFE it has its own scope.

So we dont have to worry about conflicting names etc

Proper encapsulation and reusability is not affected


(function(){

    Module code actually lives here

})()