
const loanAmount = document.getElementById('loan-amount');
const loanYears = document.getElementById('loan-years');
const loanRate = document.getElementById('loan-rate');
const span = document.querySelector('span');
const form = document.getElementById("calc-form");


form.addEventListener("submit", function (e) {
    e.preventDefault(); 

// let i =loanRate.value/12;
// let test = loanAmount.value * i;
// let n = loanYears.value
// const monthylPayment = (test)/1-(1+ i)** -(n);
//  let newPayment = Math.round(monthylPayment * 100)/100;

// span.innerText= newPayment;


calculatePayment();
   
  });


function calculatePayment(){
    let i =loanRate.value/12;
let principle = loanAmount.value * i;
let n = loanYears.value *12;
const monthylPayment = (principle)/1-(1+ i)** -(n);
 let newPayment = Math.round(monthylPayment * 100)/100;

span.innerText= newPayment;
}




//   function makeLogo() {
//     const principle = loanAmount.value 
  
//     const n = loanYears.value * 12;
//     const i = loanRate.value / 12;


// const monthylPayment = (principle* i)/1-(1+ i)** -(n);

// span.innerText = monthylPayment;
//   }
  
