import { kosarTorolEsemeny } from "./main.js";

export function kosarLetrehoz(lista){
    let txt = "<div class='table-responsive'><table class='table'>";
    txt += "<thead>";
    txt += "<tr class='table-dark'><th>Név</th><th>Kép</th><th>Ár (Ft)</th><th>Darab</th><th></th></tr>"
    txt += "</thead>";
    txt += "<tbody>";
    lista.forEach((elem, index) => {
        txt += `<tr class='table-info'>
        <td>${elem.nev}</td>
            <td><img src="${elem.kep}" alt="kep" width="113" height="85"></td>
            <td>${elem.dbszam*elem.ar}</td>
            <td>${elem.dbszam}</td>
            <td><button id="${index}" class="kosarTorol">❌</button></td>
        </tr>`
    });
    txt += "</tbody>"
    txt += "</table></div>";
    return txt
}

export function kosarMegjelenit(txt){
    const ELEM=$(".kosar")
    ELEM.html(txt)
    kosarTorolEsemeny();
}