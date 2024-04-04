let voters = document.getElementById("voters");

let blankVote = document.querySelector("#blank");
let voidVote = document.getElementById("void");
let validVote = document.querySelector("#valid");

const btn = document.getElementById('btn');
const result = document.getElementById('res');

function percentualValue(value) {
    let res = (value * 100) / Number(voters.value);
    // console.log(res)
    return res
};

btn.addEventListener('click', ()=>{
    // console.log(Number(voters.value));
    let percentualBlank = percentualValue(Number(blankVote.value));
    // console.log(Number(blankVote.value));
    let percentualVoid = percentualValue(Number(voidVote.value));
    // console.log(Number(voidVote.value));
    let percentualValid = percentualValue(Number(validVote.value));
    // console.log(Number(validVote.value));

    result.innerHTML = `<p>O percentual de cada um é:</p>`;
    result.innerHTML += `<p>Votos que conta com ${voters.value} habitantes é 100%</p>`;
    result.innerHTML += `<p>Votos Brancos é ${percentualBlank}%</p>`;
    result.innerHTML += `<p>Votos Nulos é ${percentualVoid}%</p>`;
    result.innerHTML += `<p>Votos Válidos é ${percentualValid}%</p>`;
})
