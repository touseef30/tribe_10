var signup=document.getElementById("signup");

signup.addEventListener("click", function(event)
{
    var username=document.getElementById("username").value;
    var email=document.getElementById("email").value;
    var pw=document.getElementById("pw").value;
    var con_pw=document.getElementById("con_pw").value;
    var show=document.getElementById("show");
    var show1=document.getElementById("show1");
    
    
    if(pw !==con_pw)
    {
        show.style.display="block";
        event.preventDefault()
    }
    else if(pw ==="" || email==="" || username==="" ||con_pw==="")
    {
        show1.style.display="block";
        event.preventDefault()
    }
    else{   
         localStorage.setItem("email", email);
         localStorage.setItem("pass", pw);
        alert("account created!");
    }
})

var signin=document.getElementById("signin");

signin.addEventListener("click", function(event)
{
event.preventDefault() 
window.location.href="login.html";
})