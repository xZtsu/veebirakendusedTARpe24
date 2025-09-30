function nimiLugemine(){
    //let -- muutuja määramine
    let eesnimi=document.getElementById("eesnimi")

}
function perenimiFN(){
    //let -- muutuja määramine
    let perenimi=document.getElementById("perenimi")

}
function sunnikuupaevFN(){
    //let -- muutuja määramine
    let kuupaev=document.getElementById("kuupaevFN")

}
function suguFN(){
    //let -- muutuja määramine
    let Naine=document.getElementById("Naine")
    let Mees=document.getElementById("Mees")
    let Muu=document.getElementById("Muu")

}
function KontaktFN(){
    //let -- muutuja määramine
    let epost=document.getElementById("epost")
    let mobiilinumber=document.getElementById("mobiilinumber")

}
function tuhjenda(){
    let eesnimi=document.getElementById("eesnimi")
    let perenimi=document.getElementById("perenimi")
    let sunnikuupaev=document.getElementById("sunnikuupaevFN")
    let Naine=document.getElementById("Naine")
    let Mees=document.getElementById("Mees")
    let Muu=document.getElementById("Muu")
    let epost=document.getElementById("epost")
    let mobiilinumber=document.getElementById("mobiilinumber")

    eesnimi.value = "";
    perenimi.value = "";
    kuupaev.value = "1980-01-01";
    Naine.value = "";
    Mees.value = "";
    Muu.value = "";
    epost.value = "";
    mobiilinumber.value = "";
}