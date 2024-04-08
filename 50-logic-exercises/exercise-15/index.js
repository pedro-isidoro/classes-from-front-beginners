const btn = document.getElementById('btn')
const result = document.getElementById('res')

let firstValue = document.getElementById("firstValue");
let secondValue = document.getElementById("secondValue");
let thirdValue = document.getElementById("thirdValue");

btn.addEventListener('click', ()=>{
    let A = Number(firstValue.value);
    let B = Number(secondValue.value);
    let C = Number(thirdValue.value);

    /*let arrayNumbers = [A, B, C]

    arrayNumbers.sort(function (a, b) {
      return a - b;
    });

    result.innerHTML = `<p>Os números em ordem crescente ${arrayNumbers}</p>`;*/

    if(A > B){
        if(A > C){
            if(C > B){
                result.innerHTML = `<p>Os números em ordem crescente ${B}, ${C} e ${A}</p>`;
            }else{
                result.innerHTML = `<p>Os números em ordem crescente ${C}, ${B} e ${A}</p>`;
            }
        }else{
            result.innerHTML = `<p>Os números em ordem crescente ${B}, ${A} e ${C}</p>`;
        }
    }else{
        if(B > C){
            if (C > A) {
              result.innerHTML = `<p>Os números em ordem crescente ${A}, ${C} e ${B}</p>`;
            } else {
                result.innerHTML = `<p>Os números em ordem crescente ${C}, ${A} e ${B}</p>`;
            }
        }else{
            result.innerHTML = `<p>Os números em ordem crescente ${A}, ${B} e ${C}</p>`;
        }
    }
})
