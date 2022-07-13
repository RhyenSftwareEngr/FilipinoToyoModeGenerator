const input = document.getElementById('password-input');
const button = document.querySelector('.btn');
const copyBtn = document.getElementById('copy_to_clipboard');
console.log(copyBtn);
button.addEventListener('click', () => {
    // console.log(generateRandNum(collection.length));
    const randNum = generateRandNum(collection.length);
    console.log(randNum);

    document.getElementById('para').innerHTML = collection[randNum];
});
console.log('HII');
console.log(button);

// Array data
let collection = ['DUN KA NALANG SA KANYA👍👍👍👍 WALA NAMAN NAKONG PAKE👍👍👍', 'SORRY NAMAN NO?😊 NAKAKAISTORBO ATA AKO SA IYO😊', 'BAHALA KA NA SA BUHAY MO😊😊😊😊😊', 'HAHAHA AKO LANG TO😊!. DI NAMAN AKO MAHALAGA SA IYO EH😊😊😊😊', '👍👍👍👍👍👍👍👍👍', 'HUWAG MO AKO KAUSAPIN😊! KAUSAPIN MO YUNG BESPREN MO!!!!', 'HUWAG MO AKO KAUSAPIN😊😊! KAUSAPIN MO NALANG MGA BARKADA MO👍👍👍👍', 'SO WALA KANG BALAK KAUSAPIN AKO😊? SIGE, DYAN KA NA SA ML MO😊! KAININ MO YANG GUSION MO😊😊😊😊', 'SO WALA KANG BALAK KAUSAPIN AKO😊😊 SGE DUN KA NA SA KADUO MO😊', 'SO WALA KANG BALAK KAUSAPIN AKO😊? SIGE, DYAN KA NA SA ML MO😊! KAININ MO YANG SELPON MO😊😊😊😊', 'DUN KA NALANG SA BESPREN MOOOO😊😊😊 MAGSAMA KAYOOOOOOOO😊', 'WAGGGGG MO AKONG IISTORBOHIN😊😊😊', 'SINO SI BABY?😊 DIBA CALLSIGN NYO YUN NG DATI MO😊? MISS MO NA BA? OH EDI KAYO NALANG ULIT😊 MAGSAMA NALANG KAYO NI BABY MO😊😊', 'AH! SO MOMMY DADDY PALA ANG TAWAGAN NIYO NG EX MO😊? TAPOS BABY ANG TAWAG MO SA AKIN? ANO AKO? ANAK NIYO? DOON KA NA SA MOMMY MO😊😊', 'AH SO MAHAL MO PARIN PALA EX MO???😊😊😊 WHAT IF BUMALIK KA NALANG SA KANYA?😊😊'];

function generateRandNum(num) {
    return Math.floor(Math.random() * num);
}

document.addEventListener('DOMContentLoaded', function() {

    copyBtn.addEventListener('click', function() {
        navigator.clipboard
            .writeText(document.getElementById('para').innerText)
            .then(
                success => console.log("text copied"), err => console.log("error copying text")
            );
    });
});