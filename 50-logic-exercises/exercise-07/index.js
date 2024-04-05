const btn = document.getElementById('btn')
const result = document.getElementById('res')

let firstExam = document.getElementById("first-exam");
let secondExam = document.getElementById("second-exam");
let thirdExam = document.getElementById("third-exam");

btn.addEventListener('click', ()=>{
    let valueFirstExam = Number(firstExam.value);
    console.log(valueFirstExam);
    let valueSecondExam = Number(secondExam.value)
    console.log(valueSecondExam);
    let valueThirdExam = Number(thirdExam.value)
    console.log(valueThirdExam);

    let average = ((valueFirstExam * 2) + (valueSecondExam * 3) + (valueThirdExam * 5)) / 10
    console.log(average)

    result.innerHTML = `<p>A média fina desse aluno é ${average}</p>`;
})
