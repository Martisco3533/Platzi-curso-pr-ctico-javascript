function calcHypotenuse(base, lado) {
        return (Math.sqrt((base * base) + (lado * lado)));
      }

function calcularAlturaTriangulo() {
    const inputLado = document.getElementById("InputTrianguloLado");
    const valueLado = inputLado.value;
    const inputBase = document.getElementById("InputTrianguloBase");
    const valueBase = inputBase.value;
    const valueBase2 = valueBase / 2

    const altura= calcHypotenuse(valueLado, valueBase2);
    alert(altura);
}
