'use strict'

var rightTriangle = {
    sides: {
        firstCathetus: undefined,
        secondCathetus: undefined,
        hypothenuse: undefined,
    },
    area: undefined,
    perimeter: undefined,
}

var firstCathetus = prompt("Wprowadź wartość pierwszej przyprostokątnej: ");
var secondCathetus = prompt("Wprowadź wartość drugiej przyprostokątnej: ");
var hypothenuse = prompt("Wprowadź wartość przeciwprostokątnej: ");

rightTriangle.firstCathetus = firstCathetus;
rightTriangle.secondCathetus = secondCathetus;
rightTriangle.hypothenuse = hypothenuse;

firstCathetus = 0; secondCathetus = 0; hypothenuse = 0;

console.log("To jest trójkąt prostokątny: ", rightTriangle.firstCathetus*rightTriangle.firstCathetus + rightTriangle.secondCathetus*rightTriangle.secondCathetus == rightTriangle.hypothenuse*rightTriangle.hypothenuse);

rightTriangle.area = 0.5*rightTriangle.firstCathetus*rightTriangle.secondCathetus;
console.log("Pole tego trójkąta wynosi (na podstawie wartości kluczy): ", rightTriangle.area);

rightTriangle.perimeter =  firstCathetus + secondCathetus + hypothenuse;
console.log("Obwód trójkąta wynosi (na podstawie zmienionych na zero zmiennych): ", rightTriangle.perimeter);

