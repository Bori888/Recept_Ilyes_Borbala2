export function letrehozRecept(lista) {
    let txt = "";
    lista.forEach((elem, index) => {
      txt += `<div class="card" style="width:800px">
          <div class="card-body">
            <h4 class="card-title">${elem.nev}</h4>
            <img class="card-img-top" src="${elem.kep}" alt="Card image">
            <p class="card-text">Hozzávalok: ${elem.hozzavalok}</p>
            <p class="card-text">Recept: ${elem.recept}</p>
            <p class="card-text">Kategoria: ${elem.kategoria}</p>
            <p class="card-text">Ár: ${elem.ar}</p>
            <button class="btn btn-primary">Töröl</button>
            <button class="btn btn-primary">Módosít</button>
          </div>
        </div>`
  
    });
    return txt;
}
export function megjelenitRecept(txt) {
  const ELEM = $(".recept")
  ELEM.html(txt)
}