// const success=document.getElementById('Success');
// const error=document.getElementById('Error');
// const invalid=document.getElementById('Invalid');
const toastBox=document.getElementById('toast-display');
const button_box=document.getElementById('button-box');


function toastabler(text){
    const toast=document.createElement('div');
    toast.classList.add('Toast');
    if(text.includes('Success'))
    {
        toast.style.color='green'
    }
    else if(text.includes('Error'))
    {
toast.style.color='red'
    }
    else if(text.includes('Invalid'))
    {
        toast.style.color='yellow'
        
    }
    toast.innerHTML=text;
    toastBox.appendChild(toast)
    setTimeout(() => {
        toast.remove();
    }, 6000);

}


button_box.addEventListener('click',function(ev){
    if(ev.target.id==="Success")
    {
        let success='<i class="fa-solid fa-check fa-beat"></i> Success';

        toastabler(success);
    }
    else if(ev.target.id==="Error")
    {
        let error='<i class="fa-solid fa-circle-xmark fa-beat"></i> Error '
        toastabler(error)
    }
    else if(ev.target.id==="Invalid")
    {
        let Invalid='<i class="fa-solid fa-exclamation fa-beat"></i> Invalid'
        toastabler(Invalid)
    }
    
})
