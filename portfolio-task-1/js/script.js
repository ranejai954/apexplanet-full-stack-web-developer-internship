// Form validation for contact page
if (document.getElementById('contactForm')) {
    document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let message = document.getElementById('message').value;
        let msg = document.getElementById('formMessage');
        
        if (name.length < 2) {
            msg.innerHTML = "Name must be at least 2 characters";
            msg.style.color = "red";
        } 
        else if (!email.includes('@') || !email.includes('.')) {
            msg.innerHTML = "Enter a valid email address";
            msg.style.color = "red";
        }
        else if (message.length < 10) {
            msg.innerHTML = "Message must be at least 10 characters";
            msg.style.color = "red";
        }
        else {
            msg.innerHTML = "✅ Message sent successfully!";
            msg.style.color = "green";
            this.reset();
        }
    });
}

console.log("Portfolio website loaded!");
