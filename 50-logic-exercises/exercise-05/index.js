const btn = document.getElementById('btn');
const result = document.getElementById('res');
const wage = document.getElementById("wage");
const readjustment = document.getElementById("readjustment");



btn.addEventListener('click', ()=>{
    let wageValue = Number(wage.value)
    let readjustmentValue = Number(readjustment.value)
    res = wageValue * readjustmentValue
    let newWage = wageValue + res / 100

    result.innerHTML = `<p>Seu novo salário será ${newWage}</p>`;
})
