document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    emailjs.send('service_73b4mrj', 'template_565edko', {
        user_name: name,
        user_email: email,
        message: message,
    }, 'uok5fPEHgyyJOL1kf')
    .then(() => {
        document.getElementById('confirmation-message').style.display = 'block';
        document.getElementById('contact-form').reset();
    }, (error) => {
        console.error('Failed to send message:', error);
        alert('Oops! Something went wrong. Please try again later.');
    });
});
