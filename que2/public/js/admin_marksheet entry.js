const form=document.getElementById('form');
const id=document.getElementById('id');
const productname=document.getElementById('product name');
const brand=document.getElementById('Brand');
const price=document.getElementById('price');


form.addEventListener('submit',(e) => {
    var c1=checkInputs();
    if(c1==1)
    {
       e.preventDefault()
    }
    
});

function checkInputs(){
     var c=0;
     
     const idValue=id.value.trim();
     const productValue=productname.value.trim();
     const brandValue=brand.value.trim();
     const priceValue=price.value.trim();
    

    
     if(idValue === '')
     {
        setErrorFor(id,'id cannot be blank');
        c=1;
        
     }
     else if(!isid(idValue))
     {
        setErrorFor(id,'id should  contain only numbers');
        c=1;
     }
     else{
        setSuccessFor(id);
     }
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
     if(priceValue === '')
     {
        setErrorFor(price,'price cannot be blank');
        c=1;
        
     }
     else if(!isid(priceValue))
     {
        setErrorFor(price,'price should  contain only numbers');
        c=1;
     }
     else{
        setSuccessFor(price);
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
function isid(idcheck)
{
    return /^[0-9 ]+$/.test(idcheck);
}



