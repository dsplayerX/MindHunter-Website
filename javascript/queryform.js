function validateForm() {
    let x=document.getElementById("name").value;
    if ( x==null || x=="") {
        alert("Name feild cannot be empty!");
        return false;
    } else {
        return true;
    }
}