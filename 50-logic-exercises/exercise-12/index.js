const btn = document.getElementById('btn')
const result = document.getElementById('res')

let bankAccountNumber = document.getElementById("bankAccountNumber");
let bankBalance = document.getElementById("bankBalance");
let bankDebit = document.getElementById("bankDebit");
let bankCredit = document.getElementById("bankCredit");

btn.addEventListener('click', ()=>{
    let bankAccountNumberValue = Number(bankAccountNumber.value);
    let bankBalanceValue = Number(bankBalance.value);
    let bankDebitValue = Number(bankDebit.value);
    let bankCreditValue = Number(bankCredit.value);

    result.innerHTML = `<p>Seu Número bancário é ${bankAccountNumberValue}</p>`;
    result.innerHTML += `<p>Seu Saldo bancário é ${bankBalanceValue}</p>`;
    result.innerHTML += `<p>Seu Débito/Despesa bancário é ${bankDebitValue}</p>`;
    result.innerHTML += `<p>Seu Crédito/Entrada bancário é ${bankCreditValue}</p>`;

    let currentBalance = (bankBalanceValue + bankCreditValue) - bankDebitValue
    result.innerHTML += `<p>Seu Saldo atual é ${currentBalance}</p>`;

    if (currentBalance >= 0) {
      result.innerHTML += `<p>Portanto é Positivo</p>`;
    } else {
      result.innerHTML += `<p>Portanto é Negativo</p>`;
    }
    
})
