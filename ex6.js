function getIdealWeight() {
    const height = document.getElementById("height");
    const sex = document.getElementById("sex");

    let idealWeight;
    if (sex.value == "man") {
        idealWeight = (72.7 * parseFloat(height.value)) - 58;
    } else {
        idealWeight = (62.1 * parseFloat(height.value)) - 44.7 ;
    }

    const result = document.getElementById("finalResult");
    result.innerHTML = `O peso ideal para você é ${idealWeight.toFixed(2)} KG`;
    height.innerHTML = "";
}