
function arvuta(kogus, hind){
    return (kogus*hind).toFixed(2);
    //toFixed - ümardab 2 numbri peale koma
}
const pilt0Hind=2;
const pilt1Hind=5;
const pilt2Hind=10;
const pilt3Hind=20;
const piltlillHind=50;

function arvutaPiltHind(){
    let vastus2=document.getElementById("vastus2");
    let tk=document.getElementById("tk");
    let v1=document.getElementById("v1");
    let v2=document.getElementById("v2");
    let v3=document.getElementById("v3");
    let v4=document.getElementById("v4");
    let v5=document.getElementById("v5");

    if(v1.checked){
        vastus2.innerHTML=arvuta(tk.value, pilt0Hind) + " Eurot";
        pilt.src="imagesBread/bagel.jpg";
    }
    if(v2.checked){
        vastus2.innerHTML=arvuta(tk.value, pilt1Hind) + " Eurot";
        pilt.src="imagesBread/baguette.jpg";
    }
    if(v3.checked){
        vastus2.innerHTML=arvuta(tk.value, pilt2Hind) + " Eurot";
        pilt.src="imagesBread/ciabatta.jpg";
    }
    if(v4.checked){
        vastus2.innerHTML=arvuta(tk.value, pilt3Hind) + " Eurot";
        pilt.src="imagesBread/flatbread.jpg";
    }
    if(v5.checked){
        vastus2.innerHTML=arvuta(tk.value, piltlillHind) + " Eurot";
        pilt.src="imagesBread/whitebread.jpg";
    }
}