function nimiLugemine(){
    //let -- muutuja määramine
    let nimi=document.getElementById("nimi")
    let vastus=document.getElementById("vastus")

    //genererime inneHTML teksti dokumendis
    vastus.innerHTML="Tere, "+nimi.value;
}
function puhasta(){

    let nimi=document.getElementById("nimi")
    let vastus=document.getElementById("vastus")
    let vastus2=document.getElementById("vastus2")

    //genereerime innerHTML teksti dokumendis
    vastus.innerHTML="Vastusekoht";
    nimi.value="";
    vastus2.style.background="white";
}
function varvValik(){
    let vastus2=document.getElementById("vastus2");
    let varv=document.getElementById("varv");

    vastus2.style.backgroundColor=varv.value;
}
function radioValik(){
    let naerata=document.getElementById("naerata");
    let kurvasta=document.getElementById("kurvasta");
    let pilt=document.getElementById("pilt");
    let vastus3=document.getElementById("vastus3");


    if(naerata.checked){
        pilt.src="images/images.jpg";
        vastus3.innerText="Naerata siis!";
        vastus3.style.color="green";
    }
    else if(kurvasta.checked){
        pilt.src="images/images2.jpg";
        vastus3.innerText="Kurvasta siis!";
        vastus3.style.color="red";
    }
    else{
        pilt.src="";
        vastus3.innerText="Tee oma valik!";
        vastus3.style.color="black";
    }
}
function tujuSlider(){
    let tuju=document.getElementById("tuju");
    let vastus4=document.getElementById("vastus4");


    if (tuju.value<30){
        vastus4.innerHTML="Tuju slider näitab: " +tuju.value +" punkti. <br> Sa oled kurb!";
    } else if (tuju.value<60){
        vastus4.innerHTML="Tuju slider näitab: " +tuju.value +" punkti. <br> Sa oled neutraalne!";
    } else{
        vastus4.innerHTML="Tuju slider näitab: " +tuju.value +" punkti. <br> Sa oled Rõõmus!";
    }
}
function koolValik(){
    let vastus5=document.getElementById("vastus5");
    let kool=document.getElementById("kool");

    //selectedIndex, 1 rida on null rida ja javascriptis
    if(vastus5.selectedIndex !== 0){
        vastus5.innerHTML="Sinu unistuste kool on " +kool.value;
    } else {
        vastus5.innerHTML="Tee oma valik!";
    }

}