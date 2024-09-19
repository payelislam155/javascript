// step 1:set event handlers
document.getElementById('login-button').addEventListener('click', function(event){
    // step 2:prevents default behavior(prevvents reloading browser)
    event.preventDefault(); // Prevent form submission
    // step 3:get the phone number
    PhoneNumber = document.getElementById('phone-number').value;
    PinNumber = document.getElementById('Pin-Number').value;
    console.log(PhoneNumber, PinNumber);
    
    // step 4: validate phone and pin numbers
    // this is temporary.you should do like this
    if (PhoneNumber === '01739557624' && PinNumber === '1234') {
        console.log('Login successful');
        window.location.href = '/home.html';
    } else {
        alert('Invalid credentials');
    }
});