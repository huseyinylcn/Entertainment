

var yorum = document.getElementById("yorum");
var yorumlar = document.getElementById("yorumlar");
var button = document.getElementById("button-addon2");
button.addEventListener("click", yorumGirisi);
function yorumGirisi() {

    var yazi = document.createElement("div");
    yorumlar.appendChild(yazi).innerHTML =
        `
    
   <div class="yorum d-flex ">
   <div class="image"><img class="rounded-circle" width="50" height="50" id="img" src="https://img.icons8.com/external-smashingstocks-glyph-smashing-stocks/66/000000/external-profile-web-smashingstocks-glyph-smashing-stocks.png" alt="profil fotoğrafı">
   </div>
   <div class="yazılar ms-2 mb-3">
       <div class="isim fw-bold">Mehmet Bayram</div>
       <div class="begeni"></div>
       <p class="yorum">${yorum.value}</p>
       <button type="button" class="btn btn-sm btn-dark">Teklif 155.000 TL</button>
   </div>
</div>    
   `
    yorum.value = "";

}




yorum.addEventListener("keydown", giris);
function giris() {
    if (event.key === "Enter") {
        var yazi = document.createElement("div");
        yorumlar.appendChild(yazi).innerHTML =
            `
    
   <div class="yorum d-flex ">
   <div class="image"><img class="rounded-circle" width="50" height="50" id="img" src="https://img.icons8.com/external-smashingstocks-glyph-smashing-stocks/66/000000/external-profile-web-smashingstocks-glyph-smashing-stocks.png" alt="profil fotoğrafı">
   </div>
   <div class="yazılar ms-2 mb-3">
       <div class="isim fw-bold">Mehmet Bayram</div>
       <div class="begeni"></div>
       <p class="yorum">${yorum.value}</p>
       <button type="button" class="btn btn-sm btn-dark">Teklif 150.000 TL</button>
   </div>
</div>    
   `
    }
}

