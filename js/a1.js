function sr() { 
    let input = document.getElementById('sear').value ;
    input=input.toLowerCase(); 
    let x= document.querySelectorAll('.items');
    for (i = 0; i < x.length; i++) {  
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].parentNode.style.display="none"; 
        } 
        else { 
            x[i].parentNode.style.display="";                  
        } 
    } 
} 	
function f1(ele)
{
let y = ele.getAttribute('data-item');
    y=y.toLowerCase(); 
    let x= document.querySelectorAll('.items');
    if(y !=='all'){
    for (i = 0; i < x.length; i++) {  
        if (!x[i].innerHTML.toLowerCase().includes(y)) {
            x[i].parentNode.style.display="none"; 
        } 
        else { 
            x[i].parentNode.style.display="";                  
        } 
    } }
    else{
    	for (i = 0; i < x.length; i++) { 
    		 x[i].parentNode.style.display=""; }
    }
}