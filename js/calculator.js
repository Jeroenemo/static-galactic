export default class Calculator {
  constructor(age) {
    this.age = age;
    this.lifeSpan = 95;
    this.planetYears = {
      'Mercury': 0.24,
      'Venus': 0.62,
      'Earth': 1,
      'Mars': 1.88,
      'Jupiter': 11.86
    };
  }lifeExpectancy(diet, exercise, seatbelt, smoke, drink) {
    if (!diet){
      this.lifeSpan -= 5;
    }
    if (!exercise){
      this.lifeSpan -= 5;
    }
    if (!seatbelt){
      this.lifeSpan -= 20;
    }
    if (smoke){
      this.lifeSpan -= 10;
    }
    if (drink){
      this.lifeSpan -= 10;
    }
  }
  ageOnPlanet(planet) {
    return (`On ${[planet]} you are ${Math.floor(this.age / this.planetYears[planet])} years old!`);
  }
  yearsLeft(planet) {
    const yearsLeft = this.lifeSpan - this.age;
    let years = Math.abs(Math.floor(yearsLeft / this.planetYears[planet]));
    const yearOrYears = (years === 1) ? 'year' : 'years';
    if (yearsLeft >= 0) {
      return (`You have ${years} ${yearOrYears} to live!`);
    } else {
      return (`You have surpassed your life expectancy by ${years} ${yearOrYears}!`); 
    }
  }
}