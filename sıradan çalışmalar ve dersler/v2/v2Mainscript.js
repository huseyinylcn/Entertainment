let carArea = document.getElementById("ana");

// let basket = JSON.parse(localStorage.getItem("data")) || [];

let generateShop = () => {
  return (carArea.innerHTML = carItemsData
    .map((x) => {
      let { id, carModel, price, carYear, bodyType, img } = x;
      // let search = basket.find((x) => x.id === id) || [];""""
      return `
      <div id=${id} class="col car-card">
      <div class="card mb-4 rounded-3 shadow-sm">
        <div class="card-header" style="height: 250px; background:url(./img/fiat-uno-turbo-1.jpg${img}) no-repeat; background-size: cover; ">
          
        </div>
        <div class="card-body">
          <h3 class="card-title pricing-card-title car-model">${carModel}</h3>
          <ul class="list-unstyled mt-3 mb-4">
            <li class="car-year">Model Year ${carYear}</li>
            <li>162.000 KM </li>
            <li>₺ ${price}</li>
            <li class="carBody-type">${bodyType}</li>
          </ul>
          <button onclick="window.open('https://www.sahibinden.com/ilan/vasita-otomobil-fiat-otomix-1985-fiat-uno-turbo-i.e-mk1-tr-de-tek-162000-km-1039992717/detay/','_blank');" type="button" class="w-100 btn btn-lg btn-outline-success">İncele</button>
        </div>
      </div>
    </div>
    `;
    })
    .join(""));
};

generateShop();