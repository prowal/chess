const $ = document.querySelector.bind(document);
console.log("wesh");
const a = $("#home");
a.innerHTML = "pouet";

PGNV.pgnView('board',{ pgn: '1. e4 e5 2. Nf3 Nc6 3. Bb5', pieceStyle: 'merida' });