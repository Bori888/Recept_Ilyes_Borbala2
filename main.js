import { ADATOK } from "./adatok.js";
import { letrehozRecept,megjelenitRecept } from "./letrehozRecept.js";
import { rendez,torol } from "./adatkezelo.js";

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
  