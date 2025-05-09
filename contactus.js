function validateForm() {
    let firstname = document.getElementById("firstname").value;
    let lastname = document.getElementById("lastname").value;
    let email = document.getElementById("email").value;
    let subject = document.getElementById("subject").value;
    
    if (firstname == "") {
        alert("First Name must be filled out");
        return false;
    }
    if (lastname == "") {
        alert("Last Name must be filled out");
        return false;
    }
    if (email == "") {
        alert("Email must be filled out");
        return false;
    }
    if (subject.length < 20 ) {
        alert("Message must be at least 20 characters long");
        return false;
    }
    ValidateEmail(email);

}

function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}