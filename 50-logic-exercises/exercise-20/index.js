const btn = document.getElementById('btn')
const result = document.getElementById('res')

btn.addEventListener('click', ()=>{
  /*let counter = 1
  do{
    result.innerHTML += `<p>Número ${counter}</p>`;
    counter ++
  }while(counter <= 10)*/
  
  for(let i=1; i<=10; i++){
    result.innerHTML += `<p>Número ${i}</p>`;
    console.log(i)
  }
})
