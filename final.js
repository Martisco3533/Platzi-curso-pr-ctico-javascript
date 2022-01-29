function calcMontoPagar(articulo, cuota) {
    return (articulo * 1.10) / cuota;
}

function calcularValorCuota() {
const inputArticulo= document.getElementById("InputValorArticulo");
const valueArticulo = inputArticulo.value;
const inputCuota = document.getElementById("InputCantidadCuotas");
const valueCuota = inputCuota.value;


const montoCuota= parseInt(calcMontoPagar(valueArticulo, valueCuota));

const resultP = document.getElementById("ResultP");
resultP.innerText = valueCuota+ " cuotas de $ " + montoCuota;
}
