const btn = document.getElementById('btn')
const result = document.getElementById('res')

let firstValue = document.getElementById("firstValue");
let secondValue = document.getElementById("secondValue");
let thirdValue = document.getElementById("thirdValue");

btn.addEventListener('click', ()=>{
    let A = Number(firstValue.value);
    let B = Number(secondValue.value);
    let C = Number(thirdValue.value);

    result.innerHTML = `<p>Os números informados formam ${A}, ${B} e ${C}</p>`;

    if(A > B){
        if(A > C){
            result.innerHTML += `<p>O maior número é o ${A}</p>`;
        } else{
            result.innerHTML += `<p>O maior número é o ${C}</p>`;
        }
    }else{
        if(B > C){
            result.innerHTML += `<p>O maior número é o ${B}</p>`;
        }else{
            result.innerHTML += `<p>O maior número é o ${C}</p>`;
        }
    }
})
