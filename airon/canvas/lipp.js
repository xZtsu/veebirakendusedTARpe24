function eestiLipp() {
    const lipp=document.getElementById("lipp");
    if(lipp.getContext) {
        let l = lipp.getContext("2d");
        l.fillStyle = "blue";
        l.fillRect(0,0,330,70);
        l.fillStyle = "black";
        l.fillRect(0,70,330,70);
        l.fillStyle = "white";
        l.fillRect(0,140,330,70);
    }
}
function prantsusmaa() {
    const lipp=document.getElementById("lipp");
    if(lipp.getContext) {
        let l = lipp.getContext("2d");
        l.fillStyle = "darkblue";
        l.fillRect(0,0,110,210);
        l.fillStyle = "white";
        l.fillRect(110,0,220,210);
        l.fillStyle = "red";
        l.fillRect(220,0,330,210);
    }
}

/* iseseivalt

1.lisada veel üks lipp kus olemas vapp või mingi logo lipu peal
 */

function Hiina() {
    const lipp=document.getElementById("lipp");
    if(lipp.getContext) {
        let l = lipp.getContext("2d");

        l.fillStyle = "red";
        l.fillRect(0,0,330,210);

        const fail=new Image();
        fail.src="hiina.png"
        fail.onload = () => {
            l.drawImage(fail, 0, 0, 330, 210);
        }

    }
}
/*
2. tahvel canvas peal joonistada valgusfoori (kolm nupu - mine, oota, seisa)
*/
function valgusfoor(){
    const tahvel=document.getElementById("tahvel");
    let mine=document.getElementById("mine");
    let oota=document.getElementById("oota");
    let seisa=document.getElementById("seisa");

    if(tahvel.getContext) {
        //rect
        let t = tahvel.getContext("2d");
        t.fillStyle = "gray";
        t.fillRect(95, 25, 100,210);

        //ring top
/*
        t.beginPath();
        t.fillStyle="black";
        t.lineWidth = 1;
        t.arc(145,65,25,0,2*Math.PI, true); // x, y-keskpunt,
        t.fill();
        // ring mid
        t.beginPath();
        t.fillStyle="black";
        t.lineWidth = 1;
        t.arc(145,130,25,0,2*Math.PI, true); // x, y-keskpunt,
        t.fill();

        t.beginPath();
        t.fillStyle="black";
        t.lineWidth = 1;
        t.arc(145,195,25,0,2*Math.PI, true); // x, y-keskpunt,
        t.fill();
*/
        seisa.onclick = function(){
            t.beginPath();
            t.fillStyle="red";
            t.lineWidth = 1;
            t.arc(145,65,25,0,2*Math.PI, true); // x, y-keskpunt,
            t.fill()

            t.beginPath();
            t.fillStyle="black";
            t.lineWidth = 1;
            t.arc(145,130,25,0,2*Math.PI, true); // x, y-keskpunt,
            t.fill()

            t.beginPath();
            t.fillStyle="black";
            t.lineWidth = 1;
            t.arc(145,195,25,0,2*Math.PI, true); // x, y-keskpunt,
            t.fill()

        }
        oota.onclick = function(){
            t.beginPath();
            t.fillStyle="black";
            t.lineWidth = 1;
            t.arc(145,65,25,0,2*Math.PI, true); // x, y-keskpunt,
            t.fill();

            t.beginPath();
            t.fillStyle="yellow";
            t.lineWidth = 1;
            t.arc(145,130,25,0,2*Math.PI, true); // x, y-keskpunt,
            t.fill();

            t.beginPath();
            t.fillStyle="black";
            t.lineWidth = 1;
            t.arc(145,195,25,0,2*Math.PI, true); // x, y-keskpunt,
            t.fill();

        }
        mine.onclick = function(){
            t.beginPath();
            t.fillStyle="green";
            t.lineWidth = 1;
            t.arc(145,195,25,0,2*Math.PI, true); // x, y-keskpunt,
            t.fill();

            t.beginPath();
            t.fillStyle="black";
            t.lineWidth = 1;
            t.arc(145,65,25,0,2*Math.PI, true); // x, y-keskpunt,
            t.fill();
            // ring mid
            t.beginPath();
            t.fillStyle="black";
            t.lineWidth = 1;
            t.arc(145,130,25,0,2*Math.PI, true); // x, y-keskpunt,
            t.fill();
        }



}
}










