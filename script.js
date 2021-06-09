//NR.1
"use strict"

//NR.2
var skaicius1, skaicius2, skaicius3, skaicius4;
skaicius1 = 1;
skaicius2 = 2;
skaicius3 = 3;
skaicius4 = 4;

//NR.3
var suma, sandauga, tmp;
suma = skaicius1 + skaicius2 + skaicius3 + skaicius4;
sandauga = skaicius1 * skaicius2 * skaicius3 * skaicius4;

console.log("skaicius1 = " + skaicius1);
console.log("skaicius2 = " + skaicius2);
console.log("skaicius3 = " + skaicius3);
console.log("skaicius4 = " + skaicius4);
console.log("suma = " + suma);
console.log("sandauga = " + sandauga);


//NR.3 (Nr.4)
tmp = skaicius1;
skaicius1 = skaicius2;
skaicius2 = tmp;

console.log("skaicius1 = " + skaicius1);
console.log("skaicius2 = " + skaicius2);

//NR.4 (Nr.5)
var bendrastekstas;
[skaicius3, skaicius4] = [skaicius4, skaicius3];
bendrastekstas = "skaicius 3 = " + skaicius3  + " skaicius4 = " + skaicius4;
alert(bendrastekstas);

//NR.5 (Nr.6)
var maxSkaicius;
maxSkaicius = Number.MAX_VALUE

console.log("maxSkaicius = " + maxSkaicius);

//Papildoma NR.1
var skaicius5, skaicius6;
skaicius5 = 5;
skaicius6 = 6;

//Papildoma NR.2
skaicius5 = skaicius5 ^ skaicius6;
skaicius6 = skaicius5 ^ skaicius6;
skaicius5 = skaicius5 ^ skaicius6;

//Papildoma NR.3
document.getElementById("skaicius5").innerHTML = "skaicius5 = "+ skaicius5;
document.getElementById("skaicius6").innerHTML = "skaicius6 = "+ skaicius6;















