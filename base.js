var resin = 0;
var respersec = 0; //Resin Per 1/2 Second
var respcl = 1; //Resin Per Click 
let numericallocs = [
    "",
    "thousand",
    "million",
    "billion",
    "trillion",
    "quadrillion",
    "quintillion",
    "sextillion",
    "septillion",
    "octillion",
    "nonillion",
    "decillion",
    "undecillion",
    "duodecillion",
    "tredecillion",
    "quattuordecillion",
    "quindecillion",
    "sexdecillion",
    "septendecillion",
    "octodecillion",
    "novemdecillion",
    "vigintillion",
    "unvigintillion",
    "duovigintillion",
    "trevigintillion ",
    "quattourvigintillion",
    "quinvigintillion",
    "hexvigintillion",
    "septenvigintillion",
    "octovigintillion",
    "novemvigintillion",
    "trigintillion",
    "untrigintillion",
    "duotrigintillion" //10 ** 99 if user reaches here it just continues
];
let resinloc = [
    "resin",
    "resins"
];
window.addEventListener('load', (event) => {
    const resin = document.querySelector(".resin");

    resin.addEventListener('click', event => {
        addresin(respcl)
    });

    setInterval(function() {
        if (respersec > 0) {
            addresin(respersec);
        }
    }, 500); //not per second bcs it do be long
});


function addresin(amt) {
    resin = resin + amt;
    var nloc = "";
    var resloc = 0;
    if (resin < 1000) { //before you curse me for writing if else, this was the most optimized method.
        resloc = resin;
        nloc = numericallocs[0] + resloccal(resloc);
    } else if (resin < (10 ** 6)) { //thousand
        resloc = parseFloat(resin / (10 ** 3)).toFixed(3);
        nloc = numericallocs[1] + resloccal(resloc);
    } else if (resin < (10 ** 9)) { //million
        resloc = parseFloat(resin / (10 ** 6)).toFixed(3);
        nloc = numericallocs[2] + resloccal(resloc);
    } else if (resin < (10 ** 12)) { //billion
        resloc = parseFloat(resin / (10 ** 9)).toFixed(3);
        nloc = numericallocs[3] + resloccal(resloc);
    } else if (resin < (10 ** 15)) { //trillion
        resloc = parseFloat(resin / (10 ** 12)).toFixed(3);
        nloc = numericallocs[4] + resloccal(resloc);
    } else if (resin < (10 ** 18)) {
        resloc = parseFloat(resin / (10 ** 15)).toFixed(3);
        nloc = numericallocs[5] + resloccal(resloc);
    } else if (resin < (10 ** 21)) {
        resloc = parseFloat(resin / (10 ** 18)).toFixed(3);
        nloc = numericallocs[6] + resloccal(resloc);
    } else if (resin < (10 ** 24)) {
        resloc = parseFloat(resin / (10 ** 21)).toFixed(3);
        nloc = numericallocs[7] + resloccal(resloc);
    } else if (resin < (10 ** 27)) {
        resloc = parseFloat(resin / (10 ** 24)).toFixed(3);
        nloc = numericallocs[8] + resloccal(resloc);
    } else if (resin < (10 ** 30)) {
        resloc = parseFloat(resin / (10 ** 27)).toFixed(3);
        nloc = numericallocs[9] + resloccal(resloc);
    } else if (resin < (10 ** 33)) {
        resloc = parseFloat(resin / (10 ** 30)).toFixed(3);
        nloc = numericallocs[10] + resloccal(resloc);
    } else if (resin < (10 ** 36)) {
        resloc = parseFloat(resin / (10 ** 33)).toFixed(3);
        nloc = numericallocs[11] + resloccal(resloc);
    } else if (resin < (10 ** 39)) {
        resloc = parseFloat(resin / (10 ** 36)).toFixed(3);
        nloc = numericallocs[12] + resloccal(resloc);
    } else if (resin < (10 ** 42)) {
        resloc = parseFloat(resin / (10 ** 39)).toFixed(3);
        nloc = numericallocs[13] + resloccal(resloc);
    } else if (resin < (10 ** 45)) {
        resloc = parseFloat(resin / (10 ** 42)).toFixed(3);
        nloc = numericallocs[14] + resloccal(resloc);
    } else if (resin < (10 ** 48)) {
        resloc = parseFloat(resin / (10 ** 45)).toFixed(3);
        nloc = numericallocs[15] + resloccal(resloc);
    } else if (resin < (10 ** 51)) {
        resloc = parseFloat(resin / (10 ** 48)).toFixed(3);
        nloc = numericallocs[16] + resloccal(resloc);
    } else if (resin < (10 ** 54)) {
        resloc = parseFloat(resin / (10 ** 51)).toFixed(3);
        nloc = numericallocs[17] + resloccal(resloc);
    } else if (resin < (10 ** 57)) {
        resloc = parseFloat(resin / (10 ** 54)).toFixed(3);
        nloc = numericallocs[18] + resloccal(resloc);
    } else if (resin < (10 ** 60)) {
        resloc = parseFloat(resin / (10 ** 57)).toFixed(3);
        nloc = numericallocs[19] + resloccal(resloc);
    } else if (resin < (10 ** 63)) {
        resloc = parseFloat(resin / (10 ** 60)).toFixed(3);
        nloc = numericallocs[20] + resloccal(resloc);
    } else if (resin < (10 ** 66)) {
        resloc = parseFloat(resin / (10 ** 63)).toFixed(3);
        nloc = numericallocs[21] + resloccal(resloc);
    } else if (resin < (10 ** 69)) {
        resloc = parseFloat(resin / (10 ** 66)).toFixed(3);
        nloc = numericallocs[22] + resloccal(resloc);
    } else if (resin < (10 ** 72)) {
        resloc = parseFloat(resin / (10 ** 69)).toFixed(3);
        nloc = numericallocs[23] + resloccal(resloc);
    } else if (resin < (10 ** 75)) {
        resloc = parseFloat(resin / (10 ** 72)).toFixed(3);
        nloc = numericallocs[24] + resloccal(resloc);
    } else if (resin < (10 ** 78)) {
        resloc = parseFloat(resin / (10 ** 75)).toFixed(3);
        nloc = numericallocs[25] + resloccal(resloc);
    } else if (resin < (10 ** 81)) {
        resloc = parseFloat(resin / (10 ** 78)).toFixed(3);
        nloc = numericallocs[26] + resloccal(resloc);
    } else if (resin < (10 ** 84)) {
        resloc = parseFloat(resin / (10 ** 81)).toFixed(3);
        nloc = numericallocs[27] + resloccal(resloc);
    } else if (resin < (10 ** 87)) {
        resloc = parseFloat(resin / (10 ** 84)).toFixed(3);
        nloc = numericallocs[28] + resloccal(resloc);
    } else if (resin < (10 ** 90)) {
        resloc = parseFloat(resin / (10 ** 87)).toFixed(3);
        nloc = numericallocs[29] + resloccal(resloc);
    } else if (resin < (10 ** 93)) {
        resloc = parseFloat(resin / (10 ** 90)).toFixed(3);
        nloc = numericallocs[30] + resloccal(resloc);
    } else if (resin < (10 ** 96)) {
        resloc = parseFloat(resin / (10 ** 93)).toFixed(3);
        nloc = numericallocs[31] + resloccal(resloc);
    } else if (resin < (10 ** 99)) {
        resloc = parseFloat(resin / (10 ** 96)).toFixed(3);
        nloc = numericallocs[32] + resloccal(resloc);
    } else {
        resloc = parseFloat(resin / (10 ** 99)).toFixed(3);
        nloc = numericallocs[33] + resloccal(resloc);
    }
    document.querySelector(".ttl").textContent = `${resloc + " " + nloc}`;
}

function addrps(amt) {
    respersec += amt;
    document.querySelector(".per").textContent = `${"per interval : " + parseFloat(respersec)}`;
}

function resloccal(amt) {
    if (amt == 1 || amt == 0) {
        return " " + resinloc[0];
    } else {
        return " " + resinloc[1];
    }
}