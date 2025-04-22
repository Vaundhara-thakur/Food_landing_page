
document.addEventListener("DOMContentLoaded", function () {

    const placeorderButtons =  document.querySelectorAll(".placeorder-btn");
    const nameInput = document.querySelector('input[name="name"]');
    const emailInput = document.querySelector('input[name="email"]');
    const passwordInput = document.querySelector('input[name="password"]');
    const signupBtn = document.querySelector("#signup-btn");
    const contactInfo =  document.querySelector(".contact-info");

    placeorderButtons.forEach(function (btn) {
        btn.addEventListener("click", function () {
            alert("Sign in to place order.");
        });
    });

    signupBtn.addEventListener("click", function () {
        alert("SORRY, this is not a real site. Thank you for visiting my project. 😊");
      });

      contactInfo.onclick = function () {
        alert("Thanks for visiting! 😄");
       };

    const name = nameInput.value.trim();
    const email = emailInput.value.trim(); 
        const password = passwordInput.value.trim();
       
        
        if (!name || !email || !password) {
            alert("Please fill out all fields.");
            return;
        }

        if (password.length < 6) {
            alert("Password must be at least 6 characters.");
            return;
        }

        console.log("Submitting:", { name, email, password });

        nameInput.value = "";
        emailInput.value = "";
        passwordInput.value = "";
}); 


