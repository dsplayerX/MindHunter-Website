
function validateForm() {
    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let tel=document.getElementById("tel").value;
    let querytext=document.getElementById("query").value;
    let atposition=email.indexOf("@");  
    let dotposition=email.lastIndexOf(".");  

    if ( name==null || name=="") {
        alert("Name field cannot be empty!");
        return false;
    } else if ( name.length < 5) {
        alert("Name should be more than 6 characters.");
        return false;
    } else if ( email==null || email=="") {
        alert("Email field cannot be empty!");
        return false;
    } else if (atposition<1 || dotposition<atposition+2 || dotposition+2>=email.length) { //taken from https://www.javatpoint.com/javascript-form-validation
        alert("Please enter a valid e-mail address.");  
        return false;
    } else if (tel==null || tel=="") {
        alert("Contact number field cannot be empty!")
        return false;
    } else if ((!/^[0-9]+$/.test(tel)) || (tel.length < 9)) { //taken from https://stackoverflow.com/questions/10713749/javascript-validation-numbers-only
        alert("Enter a valid phone number!")
        return false; 
    } else if ( querytext==null || querytext=="") {
        alert("Query discription cannot be empty!");
        return false;
    } else if ( querytext.length < 25) {
        alert("Please explain your query in more details.");
        return false;
    } else {
        displayQuery();
    }
}

function displayQuery() {
    document.getElementById("formcontent").style.display="none";
}