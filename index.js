const SuperHeroClass = require("./superHero");

const superHero = new SuperHeroClass('Batman')

console.log(superHero.getName());
superHero.setName("Superman");

console.log(superHero.getName());

const newSuperHero = new SuperHeroClass("IronMan")
console.log(newSuperHero.getName());
console.log(superHero.getName());
