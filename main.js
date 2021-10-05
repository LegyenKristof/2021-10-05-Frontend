let filmLista = []
document.getElementById("hozzaAdButton").addEventListener("click", hozzaAd)

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

    if (nev != "" && rendezo != "" && kiadasiEv != ""){    
        let ujFilm = new Film(nev, rendezo, kiadasiEv)
        filmLista.push(ujFilm)
    
        document.getElementById("nevInput").value = ""
        document.getElementById("rendezoInput").value = ""
        document.getElementById("kiadasiEvInput").value = ""
    
        let table = document.getElementById("table");
        let tr = table.insertRow()
        tr.insertCell(0).innerHTML = nev
        tr.insertCell(1).innerHTML = rendezo
        tr.insertCell(2).innerHTML = kiadasiEv
    }
}