// Código del cuadrado
console.group("Cuadrados");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm");

function perimetroCuadrado(lado) {
    return lado * 4;
}
// console.log("El perímetro del cuadrado es: " + perimetroCuadrado + " cm");

function areaCuadrado(lado) {
    return lado * lado;
}
// console.log("El área del cuadrado es: " + areaCuadrado + " cm²");
console.groupEnd();

// Código del triángulo
console.group("Triángulo");
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriángulo = 4;
// console.log(
//    "Los lados del triángulo miden: " 
//   + ladoTriangulo1 
//   + " cm, " 
//   + ladoTriangulo2 
//   + " cm, " 
//   + baseTriángulo 
//   + " cm"
//   );

//const alturaTriangulo = 5.5;
//console.log("La altura del triángulo es: " + alturaTriangulo + " cm");

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}
// console.log ("El perímetro del Triángulo es: " + perimetroTriangulo + " cm");

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}
//console.log("El área del Triángulo es: " + areaTriangulo + " cm²");
console.groupEnd();

// Código del círculo
console.group("Círculos");
//const radioCirculo = 4;
//console.log("El radio del Círculo es: " + radioCirculo + " cm");

function diametroCirculo(radio) {
    return radio * 2;
}
//console.log("El diámetro del Círculo es: " + diametroCirculo + " cm");

const PI = Math.PI;
console.log("PI es: " + PI);

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
//console.log("El perímetro del Círculo es: " + perimetroCirculo + " cm");

function areaCirculo(radio) {
    return (radio * radio) * PI;
}
//console.log("El área del Círculo es: " + areaCirculo + " cm²");


console.groupEnd();


// Aquí interactuamos con el HTML
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}
function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    

    const area = areaCuadrado(value);
    alert(area);
}