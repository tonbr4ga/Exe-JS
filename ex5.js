const PRECO_MT_QUADRADO = 36;

function getFinalPrice() {
    const width = document.getElementById("width");
    const length = document.getElementById("length");
    const totalValue = parseFloat(width.value) * parseFloat(length.value) * 36;

    const result = document.getElementById("finalResult");
    result.innerHTML = `O valor total da empreita R$ ${totalValue.toFixed(2)}`;
    width.innerHTML = "";
    length.innerHTML = "";
}