
var t_shirt= ()=>{
    document.getElementById("right").innerHTML=`
    <div class="reklam" ><img src="images.png"></div>
    `

    for(var i=0;i<sherd.length;i++){
      document.getElementById("right").innerHTML+=`
<form ><img src="${sherd[i].urunFoto}">
<h2>${sherd[i].urunAdi}</h2>

<span>${sherd[i].fiyati}TL</span> 
<div>${sherd[i].buton}</div>
</form>
    
        `
   
    }
}





// var string1=JSON.stringify(dizi)
// console.log(string1)
// localStorage.setItem("string1",string1)
// var come=localStorage.getItem("string1")
// var sherd1=JSON.parse(come)
