let filmLista = []
document.getElementById("hozzaAdButton").addEventListener("click", hozzaAd)
document.getElementById("listazasButton").addEventListener("click", listazas)

class Film{
    constructor(nev, rendezo, kiadasiEv){
        this.nev = nev
        this.rendezo = rendezo
        this.kiadasiEv = kiadasiEv
    }
}

function hozzaAd(){
    let nev = document.getElementById("nevInput").value
    let rendezo = document.getElementById("rendezoInput").value
    let kiadasiEv = document.getElementById("kiadasiEvInput").value
    
    let ujFilm = new Film(nev, rendezo, kiadasiEv)
    filmLista.push(ujFilm)

    document.getElementById("nevInput").value = ""
    document.getElementById("rendezoInput").value = ""
    document.getElementById("kiadasiEvInput").value = ""
}

function listazas(){
    let table = document.getElementById("table");
    table.innerHTML = "<tr><th>Név</th><th>Rendező</th><th>Kiadási év</th></tr>"

    for (let i = 0; i < filmLista.length; i++){
        let tr = table.insertRow()
        tr.insertCell(0).innerHTML = filmLista[i].nev
        tr.insertCell(1).innerHTML = filmLista[i].rendezo
        tr.insertCell(2).innerHTML = filmLista[i].kiadasiEv
    }
}