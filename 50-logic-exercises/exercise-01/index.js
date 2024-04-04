let number = document.getElementById("numberFromInput");
const btn = document.getElementById("btn");
let res = document.getElementById("res");

// console.log(number);
// console.log(res);
btn.addEventListener('click', ()=>{
    // console.log('Clicou!');
    const value = Number(number.value);
    console.log(value);
    console.log(typeof(value));

    const predecessorPositive = value - 1;
    const predecessorNegative = value + 1;

    if(value > 0){
        res.innerHTML = `<p>O valor inserido é ${value} e seu antecessor é ${predecessorPositive}</p>`;
    }else{
        res.innerHTML = `<p>O valor inserido é ${value} e seu antecessor é ${predecessorNegative}</p>`;
    };
});