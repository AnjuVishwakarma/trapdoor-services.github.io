/*---------------------
        Form section
    --------------------- */

var clientLogin = document.getElementById("clientLogin");
clientLogin.addEventListener("click",(e)=>{
    e.preventDefault();
    var myFunc = document.getElementById("myFunc");
    myFunc.style.display = "flex";
})
var closeForm = document.getElementById("closeForm");
closeForm.addEventListener("click",(e)=>{
    e.preventDefault();
    var myFunc = document.getElementById("myFunc");
    myFunc.style.display = "none";
})



