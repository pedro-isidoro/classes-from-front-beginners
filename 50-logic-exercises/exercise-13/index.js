const btn = document.getElementById('btn')
const result = document.getElementById('res')

let maximumQuantity = document.getElementById("maximumQuantity");
let minimumQuantity = document.getElementById("minimumQuantity");
let currentQuantity = document.getElementById("currentQuantity");

btn.addEventListener('click', ()=>{
    let maximumQuantityValue = Number(maximumQuantity.value);
    let minimumQuantityValue = Number(minimumQuantity.value);
    let currentQuantityValue = Number(currentQuantity.value);

    let average = (maximumQuantityValue + minimumQuantityValue) / 2

    if (currentQuantityValue >= average) {
      result.innerHTML = `<p>Não Efetuar Compra!</p>`;
    } else {
      result.innerHTML = `<p>Efetuar Compra!</p>`;
    }
})
