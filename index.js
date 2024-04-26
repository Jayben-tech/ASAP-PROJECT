/*const myButton = document.getElementById("myButton");
myButton.addEventListener("click", function() {
    window.location.href="profile.html";
});*/

const registrationForm = document.getElementById("registrationForm");
registrationForm.addEventListener("submit", function(event){
    event.preventDefault();

    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    if (password !== confirmPassword) {
    alert ("passwords do not match! Please re-enter your password"); 
    return;  
    } 
    console.log ("Passwords match! Registration successful (simulated)");
});