document.querySelector('form').addEventListener('submit', function(event) {
    const emailInput = document.getElementById('email');
    const emailValue = emailInput.value;

    // Regular expression to check for a valid email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(emailValue)) {
        document.querySelector('.duo > svg').style.display = "block";
        document.querySelector('#emailError').style.display = "block";

        event.preventDefault();
    }
});
