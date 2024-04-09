const btn = document.getElementById('btn')
const result = document.getElementById('res')

let firstValue = document.getElementById("firstValue");
let secondValue = document.getElementById("secondValue");

btn.addEventListener('click', ()=>{
    let A = Number(firstValue.value);
    let B = Number(secondValue.value);
    
    if(B == 0){
      result.innerHTML = `<p>Digite um valor diferente de 0 no 2° valor.</p>`;
    } else{
      let res = A / B
      result.innerHTML = `<p>A divisão do 1° Número pelo 2° é ${res}</p>`;
    }
})
