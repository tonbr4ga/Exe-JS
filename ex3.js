function getAmount(idProduct) {
    const productElement = document.getElementById(idProduct);
    const product = {
        name: productElement.querySelector(".name"),
        price: productElement.querySelector(".price"),
        amount: productElement.querySelector(".amount"),
    }
    const result = productElement.querySelector(".partialResult");

    const productAmount = parseInt(product.amount.value) * parseFloat(product.price.value);
    result.innerHTML = `O valor total do protudo ${product.name.value} foi de ${productAmount.toFixed(2)}`;
    return productAmount;
}

function getSaleAmount() {
    const products = document.querySelectorAll(".produto");
    let saleAmount = 0;
    products.forEach((product) => {
        saleAmount += getAmount(product.getAttribute("id"))
    })
    const result = document.getElementById("finalResult");
    result.innerHTML = `O valor total da venda foi de ${saleAmount.toFixed(2)}`;
}