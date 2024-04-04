let years = document.getElementById("years");
let months = document.getElementById("months");
let days = document.getElementById("days");
const btn = document.getElementById('btn')
const result = document.getElementById('res')

btn.addEventListener('click', ()=>{
    let yearsValue = Number(years.value);
    console.log(yearsValue);
    let monthsValue = Number(months.value);
    console.log(monthsValue);
    let daysValue = Number(days.value);
    console.log(daysValue);
    
    res = yearsValue * 365 + monthsValue * 30 + daysValue;
    console.log(`Você já viveu ${res} dias`)

    result.innerHTML = `<p>Você já viveu ${res} dias</p>`;
})
