
function validate() {
    let name = document.getElementById("text");
    let pass = document.getElementById("pass");
    let terror = document.getElementById("t-error");
    let perror = document.getElementById("p-error");
                    //  regexp
                    let errors=/^[a-zA-Z]*$/    
    if (!name.value.match(errors) ) {
         terror.innerHTML="*You cant enter Number in this feild*";
             name.style.border = "2px solid red";
                return false;
                } 
   else if (name.value.length <= 3 || name.value.length>20 ) {
        terror.innerHTML="*Length Cannot be less than 4 and more than 20";
        name.style.border = "2px solid red";
        name.focus();
        return false;
    } else{
        name.style.border="2px solid green";
        terror.innerHTML=null;
    }

    let err=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,10}$ /

    if(pass.value.length > 3){
        if(pass.value.match(err)) {
            console.log(pass.value);
            return true;
        }
    if (!pass.value.match(err)) {
        perror.innerHTML="*You are missing a Capital letter in this feild*";
        pass.style.border = "2px solid red";
        pass.focus();
        console.log(pass.value)
        return false;
    } 
   
   }
     else if (pass.value.length <= 3 || pass.value.length>10) {
        perror.innerHTML="* Password must be in Length of Cannot be less than 4 and more than 10";
        pass.style.border = "2px solid red";
        pass.focus();
        return false;
    }  
    
     return true;

}

let names = document.getElementById("text");
let pass = document.getElementById("pass");
let terror = document.getElementById("t-error");
let perror = document.getElementById("p-error");
 
  

// names.addEventListener("input",(e)=>{
//     if( e.target.value.match(errors)){
//         terror.style.display="none";
//         names.style.border = "2px solid green";
    
//         }else{
//         terror.innerHTML="*You can not enter Number Here ";

//     }
//     console.log(e.target.value)
// })

 

