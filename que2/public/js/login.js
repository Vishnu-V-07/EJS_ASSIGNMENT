
const form=document.getElementById('form');
const productname=document.getElementById('productname');
const brand=document.getElementById('brand');


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
    const productValue=productname.value.trim();
    const brandValue=brand.value.trim();
    
    if(productValue === '')
     {
        setErrorFor(productname,'product name cannot be blank');
        c=1;
        
     }
     else if(!isproduct(productValue))
     {
        setErrorFor(productname,'product name should not contain any special characters');
        c=1;
     }
     else{
        setSuccessFor(productname);
     }
     if(brandValue === '')
     {
         setErrorFor(brand,'brand cannot be blank');
         c=1;
     }
     else if(!isproduct(brandValue))
     {
        setErrorFor(brand,'brand name should not  contain any special characters');
        c=1;
     }
     else{
         setSuccessFor(brand);
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
function isproduct(product)
{
    return /^[A-Za-z0-9 ]+$/.test(product);
}

