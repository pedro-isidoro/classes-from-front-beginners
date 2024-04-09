const btn = document.getElementById('btn')
const result = document.getElementById('res')

let onlyOneValue = document.getElementById('onlyOneValue');

btn.addEventListener('click', ()=>{
  let A = Number(onlyOneValue.value)
  result.innerHTML = ''
  if(A >= 1){
    for(let i=1; i<=A; i++){
      result.innerHTML += `<p>Número ${i}</p>`;
      console.log(i)
    }
  }else{
    for(let i=1; i>=A; i--){
      result.innerHTML += `<p>Número ${i}</p>`;
      console.log(i)
    }
  }
})
