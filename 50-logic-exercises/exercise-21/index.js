const btn = document.getElementById('btn')
const result = document.getElementById('res')

btn.addEventListener('click', ()=>{
  for(let i=10; i>=1; i--){
    result.innerHTML += `<p>Número ${i}</p>`;
    console.log(i)
  }
})
