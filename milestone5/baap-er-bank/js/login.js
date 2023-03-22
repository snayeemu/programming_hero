document.getElementById('submit-btn').addEventListener('click', function(){
    const email = document.getElementById('user-email').value;
    const password = document.getElementById('user-password').value;

    // DANGER: DO NOT VERIFY email password on the client side
    if (email.toLowerCase() == 'shaikh@nayeem.uddin' && password == 'createdByNayeem')
        window.location.href = 'bank.html'
    else
        alert('invalid username or password');
});