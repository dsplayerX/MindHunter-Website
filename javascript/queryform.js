//Query Form JavaScript - Dumindu//

function validateForm() {
    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let tel=document.getElementById("tel").value;
    let querytext=document.getElementById("query").value;
    let subject=document.getElementById("subject").value;
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
    } else if ((!/^[0-9]+$/.test(tel)) || (tel.length < 9) || (tel.length > 10)) { // first condition taken from https://stackoverflow.com/questions/10713749/javascript-validation-numbers-only
        alert("Enter a valid phone number!")
        return false; 
    } else if ( subject==null ||subject=="") {
        alert("Subject field cannot be empty!");
        return false;
    } else if ( querytext==null || querytext=="") {
        alert("Query discription cannot be empty!");
        return false;
    } else if ( querytext.length < 25) {
        alert("Please explain your query in more details.");
        return false;
    } else {
        displayQuery();
        showEnteredInfo();
    }
}

function displayQuery() {
    document.getElementById("formcontent").style.display="none";
    document.getElementById("verifiedouter").style.display="block";
}

function hideQuery() {
    document.getElementById("formcontent").style.display="block";
    document.getElementById("verifiedouter").style.display="none";
}

function editQuery() {
    document.getElementById("formcontent").style.display="block";
    document.getElementById("verifiedouter").style.display="none";
}

function showEnteredInfo() {
    document.getElementById("displayname").innerHTML=document.getElementById("name").value;
    document.getElementById("displayemail").innerHTML=document.getElementById("email").value;
    document.getElementById("displaycontact").innerHTML=document.getElementById("tel").value;
    document.getElementById("displaysubject").innerHTML=document.getElementById("subject").value;
    document.getElementById("displayquery").innerHTML=document.getElementById("query").value; 
}
