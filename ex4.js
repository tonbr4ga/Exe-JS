const KM_BY_LITER = 8;

function getFinalPrice() {
    const distance = document.getElementById("distance");
    const fuelPrice = document.getElementById("price");
    const totalValue = (parseFloat(distance.value) / KM_BY_LITER) * parseFloat(fuelPrice.value);

    const result = document.getElementById("finalResult");
    result.innerHTML = `O valor total da viajem foi de R$ ${totalValue.toFixed(2)}`;
    distance.innerHTML = "";
    fuelPrice.innerHTML = "";
}