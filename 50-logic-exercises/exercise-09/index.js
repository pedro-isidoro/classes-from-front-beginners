const btn = document.getElementById('btn')
const result = document.getElementById('res')

let enteredValue = document.getElementById("entered-value");

btn.addEventListener('click', ()=>{
    let number = Number(enteredValue.value)
    if(number >= 0){
        result.innerHTML = `<p>O valor inserido (${number}) é Positivo</p>`;
    } else if (number <= 0) {
      result.innerHTML = `<p>O valor inserido (${number}) é Negativo</p>`;
    }else{
        result.innerHTML = `<p>Valor inserio é inválido!!</p>`;
    }
})
