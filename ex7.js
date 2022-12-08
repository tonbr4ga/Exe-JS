var list = [];

function insert() {
    const numberValue = document.getElementById("numberValue");
    list.push(numberValue.value);
    numberValue.value = "";
    numberValue.focus();
}

function show() {
    const result = document.getElementById("result")
    result.innerHTML = "";
    for (let i = 0; i < list.length; i++) {
        result.innerHTML += list[i] + "-";
    }
    document.getElementById("numberValue").focus();
}

function bigger() {
    let aux = [...list]
    aux.sort((a,b) => parseFloat(a) - parseFloat(b))
    let bigger = aux[list.length - 1]

    document.getElementById("result").innerHTML = bigger;
}

function smaller() {
    let aux = [...list]
    aux.sort((a,b) => parseFloat(a) - parseFloat(b))
    let bigger = aux[0]

    document.getElementById("result").innerHTML = bigger;
}