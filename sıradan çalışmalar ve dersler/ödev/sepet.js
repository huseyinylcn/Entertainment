



function sepet(){
    for(var x=0;x<dizi[x].fiyati;x++){
        document.getElementById("ft").innerHTML=
        dizi[x].fiyati  *(x+1)
      
    }
  console.log(typeof dizi[0].fiyati)


}
function ekle(){dizi.push(sherd[0])
    document.getElementById("lastright").innerHTML+=
    `
    <div class="sepeteGir"><img src="${sherd[0].urunFoto}">
    <h2>${sherd[0].urunAdi}</h2>
    
    <p>${sherd[0].fiyati}</p>
   
            </div>
    `

}
function ekle1(){dizi.push(sherd[1])
    document.getElementById("lastright").innerHTML+=
    `
    <div class="sepeteGir"><img src="${sherd[1].urunFoto}">
    <h2>${sherd[1].urunAdi}</h2>
    
    <p>${sherd[1].fiyati}</p>
   
            </div>
    `


    }
function ekle2(){dizi.push(sherd[2])
    document.getElementById("lastright").innerHTML+=
    `
    <div class="sepeteGir"><img src="${sherd[2].urunFoto}">
    <h2>${sherd[2].urunAdi}</h2>
    
    <p>${sherd[2].fiyati}</p>
   
            </div>
    `

   }
function ekle3(){dizi.push(sherd[3])
    document.getElementById("lastright").innerHTML+=
    `
    <div class="sepeteGir"><img src="${sherd[3].urunFoto}">
    <h2>${sherd[3].urunAdi}</h2>
    
    <p>${sherd[3].fiyati}</p>
   
            </div>
    `

    }
function ekle4(){dizi.push(sherd[4])
    document.getElementById("lastright").innerHTML+=
        `
        <div class="sepeteGir"><img src="${sherd[4].urunFoto}">
        <h2>${sherd[4].urunAdi}</h2>
        
        <p>${sherd[4].fiyati}</p>
       
                </div>
        `
    
   
    
}
function ekle5(){
    dizi.push(sherd[5])
        document.getElementById("lastright").innerHTML+=
        `
        <div class="sepeteGir"><img src="${sherd[5].urunFoto}">
        <h2>${sherd[5].urunAdi}</h2>
        <span>${sherd[5].fiyati}TL</span> 
        
        
                </div>
        `
}
function ekle6(){
    dizi.push(sherd[6])
        document.getElementById("lastright").innerHTML+=
        `
        <div class="sepeteGir"><img src="${sherd[6].urunFoto}">
        <h2>${sherd[6].urunAdi}</h2>
        <span>${sherd[6].fiyati}TL</span> 
        
        
                </div>
        `
}
function ekle7(){
    dizi.push(tisort[7])
        document.getElementById("lastright").innerHTML+=
        `
        <div class="sepeteGir"><img class="htr" src="${sherd[7].urunFoto}">
        <h2>${sherd[7].urunAdi}</h2>
        <span>${sherd[7].fiyati}TL</span> 
        
        
                </div>
        `
        console.log(dizi)
}







