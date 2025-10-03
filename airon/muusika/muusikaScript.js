function puhasta(){

    let DaveBlunts=document.getElementById("DaveBlunts")
    let RH=document.getElementById("RH")
    let Pan=document.getElementById("Pan")
    let vastus=document.getElementById("vastus")

    //genereerime innerHTML teksti dokumendis
    DaveBlunts.checked=false;
    RH.checked=false;
    Pan.checked=false;
    vastus.innerHTML="";
}



function valiAnsambel(){
    let DaveBlunts=document.getElementById("DaveBlunts");
    let RH=document.getElementById("RH");
    let Pan=document.getElementById("Pan");
    let vastus=document.getElementById("vastus");

    let valik="";

    if(DaveBlunts.checked){
        valik+=DaveBlunts.value+", ";
    }
    if(RH.checked){
        valik+=RH.value+", ";
    }
    if(Pan.checked){
        valik+=Pan.value+", ";
    }

    vastus.innerHTML="Sinu valitud muusikud: "+valik;
}

function MTunnidFN(){
    let Tunnid=document.getElementById("Tunnid");
    let vastusTund=document.getElementById("vastusTund");

    if(Tunnid.value<25){
        vastusTund.innerHTML="Sa kuulad muusikat " +Tunnid.value +" tundi päevas.";
    }
}

function RaadioFN(){
    let RadioJah=document.getElementById("RadioJah");
    let RadioEi=document.getElementById("RadioEi");
    let VastusRaadio=document.getElementById("VastusRaadio");

    if(RadioJah.checked){
        VastusRaadio.innerHTML="Raadio kuulamine: "+RadioJah.value;
    }
    else if(RadioEi.checked)
    {
        VastusRaadio.innerHTML="Raadio kuulamine: "+RadioEi.value;}
}

function RaadioJaamFN(){
    let RaadioJaamad=document.getElementById("RaadioJaamad");
    let VastusRaadioJaam=document.getElementById("VastusRaadioJaam");

    VastusRaadioJaam.innerHTML="Sinu nimetatud jaamad: "+RaadioJaamad.value;
}

function MuusikaValikFN(){
    let MuusikaValik=document.getElementById("MuusikaValik");
    let vastusvalik=document.getElementById("vastusvalik");

    if(vastusvalik.selectedIndex !== 0){
        vastusvalik.innerHTML="Sinu vastus: " +MuusikaValik.value;
    } else {
        vastusvalik.innerHTML="Tee oma valik!";
    }
}