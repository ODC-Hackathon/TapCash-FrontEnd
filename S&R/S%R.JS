
const sendMoneyForm = document.getElementById('send-money-form');
const requestMoneyForm = document.getElementById('request-money-form');
const confirmationDiv = document.getElementById('confirmation');

sendMoneyForm.addEventListener('submit', function(event) {
	event.preventDefault();
	const recipient = event.target.elements.recipient.value;
	const amount = event.target.elements.amount.value;
	// code to send money to recipient and display confirmation
	confirmationDiv.innerText = `Sent ${amount} to ${recipient}`;
});

requestMoneyForm.addEventListener('submit', function(event) {
	event.preventDefault();
	const sender = event.target.elements.sender.value;
	const amount = event.target.elements.amount.value;
	// code to request money from sender and display confirmation
	confirmationDiv.innerText = `Requested ${amount} from ${sender}`;
});


