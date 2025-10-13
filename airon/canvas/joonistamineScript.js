//sirge joon
function sirgeJoon(){
    // määrame tahvli
    const tahvel=document.getElementById("tahvel");
    if(tahvel.getContext){
        let t=tahvel.getContext("2d"); //anname tahvlinimi on t
        //joon
        t.beginPath();
        t.strokeStyle="black";
        t.lineWidth = 1;
        t.moveTo(50,100);
        t.lineTo(150,200);
        t.stroke();
    }
}
//sirge joon
function kolmnurk(){
    // määrame tahvli
    const tahvel=document.getElementById("tahvel");
    if(tahvel.getContext){
        let t=tahvel.getContext("2d"); //anname tahvlinimi on t
        //joon
        t.beginPath();
        t.strokeStyle="Green";
        t.fillStyle="Green";
        t.lineWidth = 1;
        t.moveTo(50,100);
        t.lineTo(150,100);
        t.lineTo(150,200);
        t.lineTo(50,100);
        t.stroke();
        t.fill();
    }
}
function puhasta(){
    const tahvel=document.getElementById("tahvel");
    if(tahvel.getContext){
        let t=tahvel.getContext("2d");
        t.clearRect(0,0,300,250); // 0,0 -vasak üleval tahvi  nruk, 300-tahvliu laius, 250- tahlvi kõrgus
    }
}

//sirge joon
function ring(){
    // määrame tahvli
    const tahvel=document.getElementById("tahvel");
    let r=document.getElementById("raadius");
    if(tahvel.getContext){
        let t=tahvel.getContext("2d"); //anname tahvlinimi on t
        //ümberjoon
        t.beginPath();
        t.strokeStyle="green";
        t.lineWidth = 1;
        t.arc(50,50,r.value,0,2*Math.PI, true); // x, y-keskpunt,
        t.stroke();
        //ring
        t.beginPath();
        t.fillStyle="green";
        t.lineWidth = 1;
        t.arc(50,120,r.value,0,2*Math.PI, true); // x, y-keskpunt,
        t.fill();
    }
}
function ristkylik(){
    const tahvel=document.getElementById("tahvel");
    let laius=document.getElementById("laius");
    let korgus=document.getElementById("korgus");
    if(tahvel.getContext){
        let t=tahvel.getContext("2d");
        t.fillStyle="yellow";
        t.fillRect(50,30,laius.value,korgus.value); // 0,0 -vasak üleval tahvi  nruk, 300-tahvliu laius, 250- tahlvi kõrgus
    }
}

function pilt(){
    const tahvel=document.getElementById("tahvel");
    if(tahvel.getContext){
        let t = tahvel.getContext("2d");

     const fail=new Image();
     fail.src="https://picsum.photos/100/200?random=1"
        t.drawImage(fail, 50, 50,100,200);
    }
}







