const btn = document.getElementById('btn')
const result = document.getElementById('res')

let firstValue = document.getElementById("firstValue");
let secondValue = document.getElementById("secondValue");
let thirdValue = document.getElementById("thirdValue");

btn.addEventListener('click', ()=>{
    let A = Number(firstValue.value);
    let B = Number(secondValue.value);
    let C = Number(thirdValue.value);
    /*if(A < B + C || B < A + C || C < A + B){
        result.innerHTML = `<p>Um triângulo foi formado com as seguintes medidas para seus  lados: ${A}, ${B} e ${C}</p>`
    }else{
        result.innerHTML = `<p>Um triângulo não pode ser formado com as seguintes medidas para seus  lados: ${A}, ${B} e ${C}</p>`
    }*/
    if(A < B + C){
        if (B < A + C) {
          if (C < A + B) {
            result.innerHTML = `<p>Um triângulo foi formado com as seguintes medidas para seus  lados: ${A}, ${B} e ${C}</p>`;
          } else {
            result.innerHTML = `<p>Um triângulo não pode ser formado com as seguintes medidas para seus  lados: ${A}, ${B} e ${C}</p>`;
          }
        } else {
          result.innerHTML = `<p>Um triângulo não pode ser formado com as seguintes medidas para seus  lados: ${A}, ${B} e ${C}</p>`;
        }
    }else{
        result.innerHTML = `<p>Um triângulo não pode ser formado com as seguintes medidas para seus  lados: ${A}, ${B} e ${C}</p>`;
    }
})
