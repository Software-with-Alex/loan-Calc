// const loanAmount = document.getElementById('loan-amt');
// const interestRate = document.getElementById('interest-rate');
// const numberYears = document.getElementById('num-years');
// const calculateBtn = document.getElementById('button-one');
// const monthlyPayment = document.getElementById('mnth-payment');
// const interestPaid = document.getElementById('int-paid');
// const totalPaid = document.getElementById('total-amt');
// const formSub = document.querySelector('.calc-container');
// const calBtn = document.getElementById('button-one')

// const Logged = (x) => {
//     console.log(x);
// }

// const monthlyPaymentsFunc = () => {
//     const loanRequest = loanAmount.value;
//     const enteredInterestRate = interestRate.value;
//     const loanTermYears = numberYears.value;
//     const dollarPaymentMonth = monthlyPayment;
    
//     const totalAmountDue = loanAmount + interestTotaltoBank;
//     const interestTotaltoBank = loanRequest * loanInterestPaid;
//     const loanInterestPaid = enteredInterestRate * 
//     //Here's the simple interest formula: Interest = P x R x N. P = Principal amount (the beginning balance). R = Interest rate (usually per year, expressed as a decimal). N = Number of time periods (generally one-year time periods).

    

//     const paymentBank = (loanRequest / loanTermYears) + (totalAmountDue / loanTermYears) + (interestTotaltoBank / loanTermYears);

    
    

    
    
// };

// formSub.addEventListener('submit', (e) => {

//     //values and enetered variables

//     const loanRequest = loanAmount.value;
//     const enteredInterestRate = interestRate.value;
//     const loanTermYears = numberYears.value;

//     // loan terms results variable

//     // mnthly is num of years / loanAmount + interest divided overtime
   
      
//     monthlyPaymentsFunc();



   
  

//     e.preventDefault();
// })

const formSub = document.querySelector('.calc-container');

formSub.addEventListener('submit', (e) => {
const loanAmount = document.getElementById('loan-amt');
const interestRate = document.getElementById('interest-rate');
const numberYears = document.getElementById('num-years');
const calculateBtn = document.getElementById('button-one');
const monthlyPayment = document.getElementById('mnth-payment');
const interestPaid = document.getElementById('int-paid');
const totalPaid = document.getElementById('total-amt');
const calBtn = document.getElementById('button-one');


//825   + 5500 = 6325   / 4  550 1375 1925

const monthlyPaymenttoBank = (loanAmount.value * interestRate) / numberYears / 12;


const paidIntestDone = interestRate.value * loanAmount.value;

monthlyPayment.innerHTML = monthlyPaymenttoBank; 
interestPaid.innerHTML = loanAmount.value * interestRate.value;
totalPaid.innerHTML = calcMnthlyPay + paidIntestDone;



e.preventDefault();

})
