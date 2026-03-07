const password = document.querySelector("#pwd");
const userName = document.querySelector("#userName");
const submit_btn = document.querySelector("#submit_btn");
const loginForm = document.querySelector("#loginForm");

const DEFAULT_PWD = "admin123";
const DEFAULT_USERNAME = "admin";

loginForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    if(userName.value === DEFAULT_USERNAME && password.value === DEFAULT_PWD){
        window.location.assign("./dashbord.html")
    }else if(userName.value === ""){
        alert("userName is empty!")
    }else if(password.value === ""){
        alert("password is empty!")
    }
    else{
        alert("Incurrect userName and Password");
        return;
    }
})