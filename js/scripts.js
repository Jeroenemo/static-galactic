function Calculator(age) {
  this.age = age;
  this.lifeSpan = 95;
  this.planetYears = {
    'Mercury': 0.24,
    'Venus': 0.62,
    'Earth': 1,
    'Mars': 1.88,
    'Jupiter': 11.86
  };
}
Calculator.prototype.lifeExpectancy = function(diet, exercise, seatbelt, smoke, drink) {
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
Calculator.prototype.ageOnPlanet = function(planet) {
  return (`On ${[planet]} you are ${Math.floor(this.age / this.planetYears[planet])} years old!`);
}
Calculator.prototype.yearsLeft = function(planet) {
  const yearsLeft = this.lifeSpan - this.age;
  let years = Math.abs(Math.floor(yearsLeft / this.planetYears[planet]));
  const yearOrYears = (years === 1) ? 'year' : 'years';
  if (yearsLeft >= 0) {
    return (`You have ${years} ${yearOrYears} to live!`);
  } else {
    return (`You have surpassed your life expectancy by ${years} ${yearOrYears}!`); 
  }
}


$(document).ready(function() {
  $('form#user-info').submit(function(event) {
    event.preventDefault();
  });
  $('button#submit').on('click', function() {
    const input = $.trim($('#age').val());

    if (input  === '') {
      alert("Please enter your age");
      return false;
    }

    $('#monkey').fadeOut('slow');
    $('#planets').fadeIn(3000);
    const age = parseInt($('#age').val());
    const diet = parseInt($('input:radio[name=diet]:checked').val());
    const exercise = parseInt($('input:radio[name=exercise]:checked').val());
    const seatbelt = parseInt($('input:radio[name=seatbelt]:checked').val());
    const smoke = parseInt($('input:radio[name=smoke]:checked').val());
    const drink = parseInt($('input:radio[name=drink]:checked').val());
    let calculator = new Calculator(age);
    calculator.lifeExpectancy(diet, exercise, seatbelt, smoke, drink);
    $('.mercury-text').html(`${calculator.ageOnPlanet('Mercury')} Furthermore, ${calculator.yearsLeft('Mercury')}`);
    $('.venus-text').html(`${calculator.ageOnPlanet('Venus')} Furthermore, ${calculator.yearsLeft('Venus')}`);
    $('.earth-text').html(`${calculator.ageOnPlanet('Earth')} Furthermore, ${calculator.yearsLeft('Earth')}`);
    $('.mars-text').html(`${calculator.ageOnPlanet('Mars')} Furthermore, ${calculator.yearsLeft('Mars')}`);
    $('.jupiter-text').html(`${calculator.ageOnPlanet('Jupiter')} Furthermore, ${calculator.yearsLeft('Jupiter')}`);
  });
  $('button#back').on('click', function() {
    $('#planets').fadeOut('slow');
    $('#monkey').fadeIn(3000);

  });
});