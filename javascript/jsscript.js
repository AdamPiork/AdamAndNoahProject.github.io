function openNav(){
    document.getElementById("myNav").style.width="100%";
}

function closeNav(){
    document.getElementById("myNav").style.width="0%";
}

function validateForm() {
    // retrieving form values
    let fname = document.getElementById("firstName").value;
    let lname = document.getElementById("lastName").value;
    let email = document.getElementById("emailInput").value;
    let tel = document.getElementById("telNumber").value;
    // avoiding blank input
    if (fname === "" || lname === "" || email === "") {
        alert("Name and email are required");
        return false;
    }
    // validating email format using a simple regular expression
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address");
        return false;
    }
    // validating if phone number is 10 digits long
    let phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(tel)){
        alert("Please enter a valid phone number");
        return false;
    }
    // if all validations pass
    return true;
}