function validateForm() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    if (email == "") {
        alert("Email must be filled out");
        return false;
    }
    if (password.length < 8) {
        alert("Password must be at least 8 characters long!");
        return false;
    }
    ValidateEmail(email);

}
function ValidateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
        return (true)
    }
    alert("You have entered an invalid email address!")
    return (false)
}
