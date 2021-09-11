const showing = document.getElementById('showing');
const button = document.getElementById('btn');
const executePass = () =>{
    function emailchacker(mail){
        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        return re.test(mail);
    };
  
    const inputMail = document.getElementById('inputMail'); 
    const outputMail = emailchacker(inputMail.value);
    inputMail.value='';
    if(outputMail){        
        const timeout = () =>{
            inputMail.setAttribute("style", "background-color: #c6ffb5;");
        showing.innerText='welcome! your mail is valid. :)'
        showing.style.backgroundColor='green';
        }
        setTimeout(timeout, 1000);

        const tTimeout = () =>{
            inputMail.setAttribute("style", "background-color: hsl(298, 100%, 51%);");
            showing.innerText='';
            showing.style.backgroundColor='';
        }
        setTimeout(tTimeout, 3000);
    }
    else{
        const timeout = () =>{
            showing.innerText='Opps! wrong!!! please input valid email :('
            showing.style.backgroundColor='red' ;
            button.style.display='none';
        }
        setTimeout(timeout, 1000);

        const tTimeout = () =>{
            showing.innerText='';
            showing.style.backgroundColor='';
            button.style.display='';
        }
        setTimeout(tTimeout, 3000);
    }   
};
