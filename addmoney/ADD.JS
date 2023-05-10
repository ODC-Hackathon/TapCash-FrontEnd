const form = document.querySelector('form');
const amountInput = document.getElementById('amount');
const paymentMethodInput = document.getElementById('paymentMethod');
const visaFields = document.getElementById('visaFields');
const etisalatFieldsDiv = document.getElementById('etisalat-fields');
const vodafoneFieldsDiv = document.getElementById('vodafone-fields');
const mobinilFieldsDiv = document.getElementById('mobinil-fields');

paymentMethodInput.addEventListener('change', (event) => {

    const selectedValue = event.target.value;

    visaFields.style.display = 'none';
    etisalatFieldsDiv.style.display = 'none';
    vodafoneFieldsDiv.style.display = 'none';
    mobinilFieldsDiv.style.display = 'none';

    if (selectedValue === 'visa') {
        visaFields.style.display = 'block';
    } else if (selectedValue === 'etisalat-cash') {
        etisalatFieldsDiv.style.display = 'block';
      } else if (selectedValue === 'vodafone-cash') {
        vodafoneFieldsDiv.style.display = 'block';
      } else if (selectedValue === 'mobinil-cash') {
        mobinilFieldsDiv.style.display = 'block';
      }
    });

form.addEventListener('submit', (event) => {
	event.preventDefault();

	const amount = amountInput.value;
	const paymentMethod = paymentMethodInput.value;

	// Get additional fields for Visa payment method
	let visaNumber, expirationDate, cvv;
	if (paymentMethod === 'visa') {
		visaNumber = document.getElementById('visaNumber').value;
		expirationDate = document.getElementById('expirationDate').value;
		cvv = document.getElementById('cvv').value;
	}

	// Send request to backend to add money
	// Example: fetch('https://api.example.com/add-money', {
	//   method: 'POST',
	//   headers: {
	//     'Content-Type': 'application/json'
	//   },
	//   body: JSON.stringify({ amount, paymentMethod, visaNumber, expirationDate, cvv })
	// })
	// .then(response
})