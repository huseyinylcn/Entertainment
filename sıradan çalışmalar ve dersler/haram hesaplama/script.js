


var inp=document.getElementById("inp");
var taksit=document.getElementById("taksit");
var geriodeme=document.getElementById("geriodeme");
var faiz=document.getElementById("faiz");
var ta=document.getElementById("ta");


function btn(){
if(inp.value<=10000){
    if(taksit.value<=12){
   var dusukfaiz= inp.value*1.3;
   geriodeme.innerHTML=dusukfaiz
   faiz.innerHTML="1.3";
   ta.innerHTML=taksit.value


}
}

if(inp.value>=10000){
    if(inp.value<=100000){
    if(taksit.value>12){
        
   var dusukfaiz= inp.value*1.6;
   geriodeme.innerHTML=dusukfaiz
 
   faiz.innerHTML="1.6";
   ta.innerHTML=taksit.value
}
}
}


    if(inp.value>=100000){
    if(taksit.value>24){
        
   var dusukfaiz= inp.value*1.9;
   geriodeme.innerHTML=dusukfaiz
   ta.innerHTML=taksit.value
   faiz.innerHTML="1.9";
}
}



}