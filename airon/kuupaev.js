function tana(){
    const now = new Date();
    const paev=now.getDate();
    const kuu=now.getMonth()+1;
    const aasta=now.getFullYear();

    const kuupaev="Täna on " + paev+". "+kuu+". "+aasta+" ";
   const tunnid=now.getHours();
   const minutid=now.getMinutes();
   const sec=now.getSeconds();

   const kellad =tunnid+" :"+minutid;+":"+sec;

    let aeg=document.getElementById("aeg")
    aeg.innerHTML=kuupaev + kellad;


}

// päevad sünnipäevani
function synnipaev() {
    let paevad = document.getElementById("paevad");

    let tana = new Date();
    let synd = new Date(2026, 3-1, 15);

    let vahe = synd - tana;
    let paevi = (vahe / (1000 * 60 * 60 * 24)).toFixed(2);
    paevad.innerHTML = paevi + "päeva";
    console.log("Minu sünnipäevani " + paevi +"päeva");

}