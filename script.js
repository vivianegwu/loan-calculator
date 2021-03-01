const amount = document.querySelector('#amount');
const interest = document.querySelector('#interest');
const years = document.querySelector('#years');
const monthlyPayment = document.querySelector('#monthly-payment');
const totalPayment = document.querySelector('#total-payment');
const totalInterest = document.querySelector('#total-interest');
const loanForm = document.querySelector('#loan-form');
const resetLoanCalculator = document.querySelector('#reset');





loanForm.addEventListener('submit', function(e){
//Hide results
document.querySelector('#results').style.display = 'none';
//show loader
document.querySelector('#loading').style.display = 'block';

//call calculate function

setTimeout(calculate, 2000);

e.preventDefault();
});

function calculate(){
  const principal = parseFloat(amount.value);
  const calculatedInterest = parseFloat(interest.value)/100/12;
  const calculatedPayments = parseFloat(years.value) * 12;

  //compute monthly payment

const x = Math.pow(1 + calculatedInterest, calculatedPayments);
const monthly = (principal * x * calculatedInterest)/ (x-1);

if(isFinite(monthly)){
  monthlyPayment.value = monthly.toFixed(2);
  totalPayment.value = (monthly * calculatedPayments).toFixed(2);
  totalInterest.value = ((monthly * calculatedPayments) -principal).toFixed(2);
  //Hide results
document.querySelector('#results').style.display = 'block';
//show loader
document.querySelector('#loading').style.display = 'none';
}else{
    showError('Please, check your numbers')
  
}



}

function showError(error){
  //Hide results
document.querySelector('#results').style.display = 'none';
//show loader
document.querySelector('#loading').style.display = 'none';

  const errorDiv = document.createElement('div');

  errorDiv.className = ' alert alert-danger';
  errorDiv.appendChild(document.createTextNode(error));

  //Get Elements

  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');

  card.insertBefore(errorDiv, heading);

  //clear error after 3 minutes

  setTimeout(clearError, 3000);
}

//clear Error

function clearError(){
  document.querySelector('.alert').remove();
}

resetLoanCalculator.addEventListener('click', Reset);

function Reset(){
  loanForm.reset();
  document.querySelector('#results').clear()

}