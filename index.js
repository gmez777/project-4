const mail = document.querySelector(".mail");
const error = document.querySelector(".error");
const errorp = document.querySelector(".errorp");
const arrow= document.getElementById("arrow");
const enter= document.querySelector(".enter");

let mailregex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


function testmail(input){
    if(mailregex.test(input.value)){
       
        console.log("works");
    } else if(!mailregex.test(input.value)){
        console.log("dontworks");
       
        enter.style.border="2px solid #F96464";
        error.style.display = "block";
        errorp.style.display = "block";
        
    }
    
}

arrow.addEventListener("click", (event)=>{
    event.preventDefault();
    testmail(mail);
    console.log("clicked");
})