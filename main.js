import { ADATOK } from "./adatok.js";
import { letrehozRecept,megjelenitRecept } from "./letrehozRecept.js";
import { rendez,torol } from "./adatkezelo.js";
import { kosarLetrehoz,kosarMegjelenit } from "kosar.js";

init(ADATOK),
rendezes(ADATOK),
initletrehozRecept(lista);


function initletrehozRecept(lista) {
    let txtRecept =letrehozRecept(lista);
    megjelenitRecept(txtRecept);
    
}

function init(lista) {
    initletrehozRecept(lista);
    torolesemeny();
    kosarTorolEsemeny();
    kosarbaRak();

    
}

function rendezes(ADATOK) {
    const SELECT =$(".options")
    SELECT.on("change", function(){
        if (this.value == "nevcsokkeno"){
            const lista =rendez(ADATOK,"nev",-1);
            console.log(lista);
            init(lista);
            
        }
        else if (this.value == "nevnovekvo"){
            const lista =rendez(ADATOK,"nev",1);
            console.log(lista);
            init(lista);
            
        }
        else if (this.value == "arcsokkeno"){
            const lista =rendez(ADATOK,"ar",-1);
            console.log(lista);
            init(lista);
            
        }
        else if (this.value == "arnovekvo"){
            const lista =rendez(ADATOK,"ar",1);
            console.log(lista);
            init(lista);
            
        }
        else if(this.value == "default"){
            init(lista);
        }

    })
    
}

function torolesemeny(){
    const torolELEM=$(".recept")
    torolELEM.on("click", function(event){
      let index = event.target.id;
      const LISTA = torol(ADATOK, index)
      init(LISTA)
    })
}
  
export function kosarTorolEsemeny(){
    const torolELEM=$(".kosarTorol")
    torolELEM.on("click", function(event){
      let index = event.target.id;
      const LISTA = torol(kosarTomb, index)
      let txtKosar = kosarLetrehoz(kosarTomb);
      kosarMegjelenit(txtKosar);
      vegosszegEsemeny();
    })
}
  

function kosarbaRak(){
    const GOMB = $('.kosarba')
    GOMB.on("click", function(event){
        console.log(event.target.id.replace('pub', ''))
        let index = event.target.id.replace('pub', '')
        index = Number(index)
        let ujElem = ADATOK[index];
        console.log(index)
        let voltBenne = false
        
        kosarTomb.forEach(elem => {
          if(elem.cim == ujElem.cim){
            elem.dbszam++;
            console.log(ujElem)
            voltBenne = true;
          }
  
        });
        if (!voltBenne){
          ujElem.dbszam = 1;
          kosarTomb.push(ujElem)
       }
  
       vegosszegEsemeny();
       let txtKosar = kosarLetrehoz(kosarTomb);
    
       kosarMegjelenit(txtKosar);
    })
}
  
function vegosszegEsemeny(){
    let vegosszeg = 0
    kosarTomb.forEach(elem =>{
      vegosszeg += elem.dbszam*elem.ar
     })
     const vegosszegkiir = $('.vegosszeg')
     vegosszegkiir.html("<h4>Végösszeg: " + vegosszeg + " Ft</h4>")
}
  
function adatokKonzolraIr(){
    const szemelyesAdatForm = $('.urlap')
    szemelyesAdatForm.on("submit", function(event){
      for (let index = 0; index < event.target.length; index++) {
        console.log(event.target[index].id, event.target[index].value)
      }
    })
}