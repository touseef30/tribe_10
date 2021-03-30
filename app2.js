var signin=document.getElementById("signin");


signin.addEventListener("click", function()
{
    var ae=localStorage.getItem("email");
    var ap=localStorage.getItem("pass");
    var email=document.getElementById("email").value;
    var pw=document.getElementById("pw").value;
    var show=document.getElementById("show");
    

    if(ae === email && ap===pw)
    {
        //change the location of it by connecting to another page 
        // by 
        // window.location.href= "otherpage.html"
        alert("login successful");
    }
    else{   
        show.style.display="block";
    
    }
})

