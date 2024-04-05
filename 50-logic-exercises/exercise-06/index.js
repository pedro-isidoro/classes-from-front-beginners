const btn = document.getElementById('btn')
const result = document.getElementById('res')

let fixedSalary = document.getElementById("fixed-salary");
let carsSold = document.getElementById("cars-sold");
let valePerCar = document.getElementById("vale-per-car");
let totalSales = document.getElementById("total-sales");

btn.addEventListener('click', ()=>{
    let ValuefixedSalary = Number(fixedSalary.value);
    // console.log(ValuefixedSalary);
    let ValuecarsSold = Number(carsSold.value)
    // console.log(ValuecarsSold);
    let ValuevalePerCar = Number(valePerCar.value)
    // console.log(ValuevalePerCar);
    let ValuetotalSales = Number(totalSales.value)
    // console.log(ValuetotalSales);

    let newSalary = ValuefixedSalary + (ValuevalePerCar * ValuecarsSold) + (ValuetotalSales * 5 / 100)

    result.innerHTML = `<p>O seu Saário total esse mês será ${newSalary}</p>`;
})
