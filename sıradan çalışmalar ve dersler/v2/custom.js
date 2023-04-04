


/* Kasa Tipine Göre */

var kasaTipiKey = document.getElementById("search");
kasaTipiKey.addEventListener("keyup" ,filtreList)

function filtreList(){
    var search = document.getElementById("search").value.toUpperCase();
    var arabalar = document.getElementById("ana");
    var carCard = document.querySelectorAll(".car-card");
    var pYazi = arabalar.getElementsByClassName("carBody-type");

    console.log(search)

    for(let i = 0; i<pYazi.length; i++){
        let match = carCard[i].getElementsByClassName("carBody-type")[0];
        console.log(i)
        console.log(pYazi)

        if(match){
            let carValue = match.textContent || match.innerHTML
            console.log(carValue)

            if(carValue.toUpperCase().indexOf(search) >-1){
                carCard[i].style.display ="";
                console.log(carCard[i])
            }else{
                carCard[i].style.display ="none";
            }
        }
    }
}



/* Markaya göre Filtreleme */

var carNameKey = document.getElementById("carNames");
carNameKey.addEventListener("keyup", filtreListModelName)

function filtreListModelName(){
    var carNamesInput = document.getElementById("carNames").value.toUpperCase();
    var arabalar = document.getElementById("ana");
    var carCard = document.querySelectorAll(".car-card");
    var carName = arabalar.getElementsByClassName("car-model");

    for(let i = 0; i<carName.length; i++){
        let matchCarName = carCard[i].getElementsByClassName("car-model")[0];
        console.log(i)
        console.log(carName)

        if(matchCarName){
            let carValue = matchCarName.textContent || matchCarName.innerHTML
            console.log(carValue)

            if(carValue.toUpperCase().indexOf(carNamesInput) >-1){
                carCard[i].style.display ="";
                console.log(carCard[i])
            }else{
                carCard[i].style.display ="none";
            }
        }
    }
}


/* Model Yılına Göre Filtre */

var modelYearFilter = document.getElementById("modelYearFilter");
modelYearFilter.addEventListener("keyup" ,yearFilter)

function yearFilter() {
    var modelYearInput = document.getElementById("modelYearFilter").value;
    var arabalar = document.getElementById("ana");
    var carCard = document.querySelectorAll(".car-card");
    var modelYearTag= arabalar.getElementsByClassName("car-year");

    console.log(modelYearInput)


    for(let i = 0; i<modelYearTag.length; i++){
        let carValue = carCard[i].getElementsByClassName("car-year")[0];
        console.log(carValue);

            if(carValue.innerHTML == modelYearInput){
                carCard[i].style.display ="";
                
            }else{
                carCard[i].style.display ="none";
            }
        }
}






