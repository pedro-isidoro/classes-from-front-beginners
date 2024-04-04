let baseRectangle = document.getElementById("base-rectangle");
let heightRectangle = document.getElementById("height-rectangle");
const btn = document.getElementById("btn");
let res = document.getElementById("res");

btn.addEventListener('click', ()=>{
    const baseValue = Number(baseRectangle.value);
    const heightValue = Number(heightRectangle.value);

    const areaRectangle = baseValue * heightValue;

    if(baseValue < 0 || heightValue < 0){
        res.innerHTML = `<p>Valor Inválido!! Favor digitar apenas valores positivos</p>`;
    } else{
        res.innerHTML = `<p>A área do retângulo com ${baseValue} de base e ${heightValue} de altura é = ${areaRectangle}</p>`;
    }
});