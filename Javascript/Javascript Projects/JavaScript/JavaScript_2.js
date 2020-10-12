function validate_form() {
    var A = document.forms["myForm"]["phone-number"].value;
    if (A == "") {
        alert("Phone Number must be filled out");
        return false;
    }
}

function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}