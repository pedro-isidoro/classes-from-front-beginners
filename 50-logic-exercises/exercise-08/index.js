const btn = document.getElementById('btn')
const result = document.getElementById('res')

let enteredValue = document.getElementById("entered-value");
console.log(enteredValue)
btn.addEventListener('click', ()=>{
    let number = Number(enteredValue.value);
    console.log(number)
    if(number > 10){
        result.innerHTML = `<p>O valor inserido(${number}) é maior que 10</p>`;
    } else if (number < 10) {
      result.innerHTML = `<p>O valor inserido (${number}) é menor que 10</p>`;
    } else {
      result.innerHTML = `<p>O valor inserido (${number}) é exatamente 10</p>`;
    }
})
