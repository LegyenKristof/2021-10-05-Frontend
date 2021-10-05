let filmLista = []

class Film{
    constructor(nev, rendezo, kiadasiEv){
        this.nev = nev
        this.rendezo = rendezo
        this.kiadasiEv = kiadasiEv
    }
}

document.getElementById("hozzaAdButton").addEventListener("click", hozzaAd)

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