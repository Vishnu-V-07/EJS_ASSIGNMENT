
const form=document.getElementById('form');
const rollnumber=document.getElementById('Rollnum');
const username=document.getElementById('username');

form.addEventListener('submit',(e) => {
    var c1=checkInputs();
    if(c1==1)
    {
       e.preventDefault();
    }
    
});

function checkInputs()
{
    var c=0;
    const rollnumberValue=rollnumber.value.trim();
    const usernameValue=username.value.trim();

    if(rollnumberValue === '')
     {
        setErrorFor(rollnumber,'roll number cannot be blank');
        c=1;
        
     }
     else if(!isRollnumber(rollnumberValue))
     {
        setErrorFor(rollnumber,'rollnumber should  contain only numbers');
        c=1;
     }
     else{
        setSuccessFor(rollnumber);
     }
     if(usernameValue === '')
     {
        setErrorFor(username,'name field cannot be blank');
        c=1;
        
     }
     else if(!isUsername(usernameValue))
     {
        setErrorFor(username,'Username should not contain Special characters');
        c=1;
     }
     else{
        setSuccessFor(username);
     }
     return c;
}
function setErrorFor(input, message)
{
    const formControl= input.parentElement;
    const small= formControl.querySelector('small');

    small.innerText=message;
    formControl.className = 'form-control error';
}
function setSuccessFor(input){
    const formControl=input.parentElement;
    formControl.className = 'form-control success';
}
function isRollnumber(rollnumber)
{
    return /^[0-9 ]+$/.test(rollnumber);
}
function isUsername(username)
{
    return /^[A-Za-z0-9 ]+$/.test(username);
}
