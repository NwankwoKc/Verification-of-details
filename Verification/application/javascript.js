//just made a change
var username = document.getElementById("name");
var emailid = document.getElementById("email");
function checkdata(){
    if(username.value == ""){
        alert("Please input your username");
        username.focus()
        return false
    }
    if(emailid.value == ""){
        alert("Please input your E-mail");
        emailid.focus()
        return false
    }
    return alert("you have succesfully sent your details");
};
