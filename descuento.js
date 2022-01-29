//const precioOriginal = 120;
//const descuento = 18;

function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
  
    return precioConDescuento;
}

function onClickButtonPriceDiscount() {
    const inputPirce = document.getElementById("InputPrice");
    const priceValue = inputPirce.value;

    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;


    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);
    
    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son $" + precioConDescuento;
}


// onsole.log({
    //precioOriginal,
    //descuento,
    //porcentajePrecioConDescuento,
  //  precioConDescuento,
//});