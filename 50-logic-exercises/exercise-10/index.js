const btn = document.getElementById('btn')
const result = document.getElementById('res')

let firstEnteredValue = document.getElementById("first-entered-value");
let SecondEnteredValue = document.getElementById("second-entered-value");

btn.addEventListener('click', ()=>{
    let firstValue = Number(firstEnteredValue.value)
    let secondValue = Number(SecondEnteredValue.value)

    if(firstValue > secondValue){
        result.innerHTML = `<p>O 1° valor (${firstValue}) é maior que o 2° (${secondValue})</p>`;
    }else if(firstValue == secondValue){
        result.innerHTML = `<p>O 1° valor (${firstValue}) é igual ao 2° (${secondValue})</p>`;
    }else{
        result.innerHTML = `<p>O 2° valor (${secondValue}) é maior que o 1° (${firstValue})</p>`;
    }
})
