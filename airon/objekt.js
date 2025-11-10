// Loon objekti 'raamatukogu'
let raamatukogu = {
    raamatud: [
        { pealkiri: 'Tõde ja õigus', autor: 'A. H. Tammsaare', aasta: 1926 },
        { pealkiri: 'Harry Potter ja tarkade kivi', autor: 'J. K. Rowling', aasta: 1997 },
        { pealkiri: 'Sapiens', autor: 'Yuval Noah Harari', aasta: 2011 }
    ],

    // Meetod, mis kuvab kõik raamatud kenasti konsoolis
    kuvaKoikRaamatud: function() {
        console.log(" Raamatukogus olevad raamatud:");
        this.raamatud.forEach((r, i) => {
            console.log(`${i + 1}. "${r.pealkiri}" - ${r.autor} (${r.aasta})`);
        });
    },

    // Meetod, mis lisab uue raamatu raamatukokku
    lisaRaamat: function(pealkiri, autor, aasta) {
        this.raamatud.push({ pealkiri, autor, aasta });
        console.log(` Raamat "${pealkiri}" on lisatud raamatukokku!`);
    },

    // Meetod, mis kuvab raamatukogu raamatute koguarvu
    kuvaKoguarv: function() {
        console.log(` Raamatukogus on kokku ${this.raamatud.length} raamatut.`);
    },

    // Meetod, mis arvutab, mitu raamatut on ilmunud pärast 2000. aastat
    arvutaUuedRaamatud: function() {
        let uusArv = this.raamatud.filter(r => r.aasta > 2000).length;
        console.log(` Raamatuid, mis on ilmunud pärast 2000. aastat: ${uusArv}`);
    },

    // Minu enda loodud meetod:
    // Näiteks meetod, mis leiab vanima raamatu raamatukogus
    leiaVanimRaamat: function() {
        let vanim = this.raamatud.reduce((vanim, r) => r.aasta < vanim.aasta ? r : vanim);
        console.log(` Vanim raamat on "${vanim.pealkiri}" (${vanim.aasta}) autorilt ${vanim.autor}.`);
    }
};

// --- Testime kõiki meetodeid ---
raamatukogu.kuvaKoikRaamatud();
raamatukogu.lisaRaamat('The Martian', 'Andy Weir', 2014);
raamatukogu.kuvaKoguarv();
raamatukogu.arvutaUuedRaamatud();
raamatukogu.leiaVanimRaamat();
