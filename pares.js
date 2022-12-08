function getPairNumbers() {
    const valueElement = document.getElementById("number");
    const result = document.getElementById("result");
    const sumResult = document.getElementById("sumResult");
    let maxNumber = parseInt(valueElement.value);
    let pairNumbers = [];
    for (let i = 0; i <= maxNumber; i++) {
        if (i % 2 == 0) {
            pairNumbers.push(i);
        }
    }

    result.innerHTML = pairNumbers;
    sumResult.innerHTML = pairNumbers.reduce((a, b) => a + b, 0);
    valueElement.value = "";
}