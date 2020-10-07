function validate_form() {
    var A = document.forms["myForm"]["email"].value;
    if (A == "") {
        alert("Email must be filled out");
        return false;
    }
}