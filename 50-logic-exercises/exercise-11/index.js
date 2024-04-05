const btn = document.getElementById('btn')
const result = document.getElementById('res')

let firstGrade = document.getElementById("firstGrade");
let secondGrade = document.getElementById("secondGrade");

btn.addEventListener('click', ()=>{
    let valueFirstGrade = Number(firstGrade.value);
    console.log(valueFirstGrade)
    let valueSecondGrade = Number(secondGrade.value);
    console.log(valueSecondGrade)

    let average = (valueFirstGrade + valueSecondGrade) / 2;

    if(average >= 7){
        result.innerHTML = `<p>A Média final do Aluno X é ${average}</p>`;
        result.innerHTML += `<p>E está Aprovado!!</p>`;
    }else if(average < 0){
        result.innerHTML = `<p>Valor Inválido!!</p>`;
    }else{
        result.innerHTML = `<p>A Média final do Aluno X é ${average}</p>`;
        result.innerHTML += `<p>E está Reprovado!!</p>`;
    }
})
