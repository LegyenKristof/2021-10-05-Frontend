let filmLista = []
document.getElementById("hozzaAdButton").addEventListener("click", hozzaAd)
document.getElementById("tableNev").addEventListener("click", rendezesNev)
document.getElementById("tableRendezo").addEventListener("click", rendezesRendezo)
document.getElementById("tableKiadasiEv").addEventListener("click", rendezesKiadasiEv)

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

function atrendez(){
    let table = document.getElementById("table");
    for(let i = 0; i < filmLista.length; i++){
        table.deleteRow(1)
    }
    for(let i = 0; i < filmLista.length; i++){
        let tr = table.insertRow()
        tr.insertCell(0).innerHTML = filmLista[i].nev
        tr.insertCell(1).innerHTML = filmLista[i].rendezo
        tr.insertCell(2).innerHTML = filmLista[i].kiadasiEv 
    }
}

function rendezesNev(){      
    filmLista.sort(compareNev);
    atrendez();
}

function rendezesRendezo(){      
    filmLista.sort(compareRendezo);
    atrendez();
}

function rendezesKiadasiEv(){      
    filmLista.sort(compareKiadasiEv);
    atrendez();
}

function compareNev( a, b ) {
    if ( a.nev < b.nev ){
      return -1;
    }
    if ( a.nev > b.nev ){
      return 1;
    }
    return 0;
}

function compareRendezo( a, b ) {
    if ( a.rendezo < b.rendezo ){
      return -1;
    }
    if ( a.rendezo > b.rendezo ){
      return 1;
    }
    return 0;
}

function compareKiadasiEv( a, b ) {
    if ( a.kiadasiEv < b.kiadasiEv ){
      return -1;
    }
    if ( a.kiadasiEv > b.kiadasiEv ){
      return 1;
    }
    return 0;
}