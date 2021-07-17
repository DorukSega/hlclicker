var resin = 0;
var respersec = 0; //Resin Per 1/2 Second
var respcl = 1; //Resin Per Click 
var mouseX = 0;
var mouseY = 0

var items = [ //this can be splitted into const and var
    [
        //Crowbar
        10, //price
        2, //amount it gives every tick
        0 //owned
    ],
    [
        //Hopper Mine
        100, //price
        6, //amount it gives every tick
        0 //owned
    ],
    [
        //The Alyx
        1000, //price
        20, //amount it gives every tick
        0 //owned
    ],
    [
        //Health Station
        10000, //price
        50, //amount it gives every tick
        0 //owned
    ],
    [
        //Ammo Crate
        100000, //price
        160, //amount it gives every tick
        0 //owned
    ],
    [
        //Mod. Turret
        1000000, //price
        500, //amount it gives every tick
        0 //owned
    ],
    [
        //Scout Car
        10000000, //price
        1500, //amount it gives every tick
        0 //owned
    ],
    [
        //Magnusson Device
        100000000, //price
        4300, //amount it gives every tick
        0 //owned
    ],
    [
        //Gravity Gun
        1000000000, //price
        13100, //amount it gives every tick
        0 //owned
    ],
    [
        //HEV Suit
        10000000000, //price
        39300, //amount it gives every tick
        0 //owned
    ],
    [
        //Dog
        100000000000, //price
        118000, //amount it gives every tick
        0 //owned
    ],
    [
        //Resistance Base
        1000000000000, //price
        354000, //amount it gives every tick
        0 //owned
    ]
];
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

/////// Click Effect ///////
const cleffect = document.createElement("div");
const cnumber = document.createElement("div");
const ceffect = document.createElement("div");
cleffect.className = "cleffect";
cnumber.className = "cnumber";
ceffect.className = "ceffect";
cleffect.append(cnumber);
cleffect.append(ceffect);
////////////////////////////

window.addEventListener('load', (event) => {
    const bitems = document.querySelectorAll(".item");
    if (readCookie("save") != `[${resin},${respersec},${respcl},${JSON.stringify(items)}]` && readCookie("save") != null) {
        const save = JSON.parse(readCookie("save"));
        setresin(save[0]);
        setrps(save[1]);
        respcl = save[2];
        items = save[3];
        bitems.forEach(function(item, index) {
            item.querySelector(".iprice").textContent = `Price: ${numtostr(items[index][0])}`;
            item.querySelector(".igain").textContent = `+${numtostr(items[index][1])}`;
            item.querySelector(".icount").textContent = numtostr(items[index][2]);
            if (index != 0) {
                if (items[index - 1][2] > 0) {
                    item.classList.remove("disabled");
                } else {
                    item.classList.add("disabled");
                }
            }
        });
    }
    const cresin = document.querySelector(".resin");

    cresin.addEventListener('click', event => {
        addresin(respcl);
        document.getElementById("clickaudio").play();
        mouseX = event.clientX;
        mouseY = event.clientY;
        const clef = cleffect.cloneNode(true);
        clef.firstChild.textContent = `+ ${numtostr(respcl)}`
        document.querySelector(".cleffect").firstElementChild.textContent = `+ ${numtostr(respcl)}`
        spawn_effect((mouseX - parseInt(getComputedStyle(document.querySelector(".cleffect")).width.replace("px")) / 2) + "px",
            (mouseY - parseInt(getComputedStyle(document.querySelector(".cleffect")).height.replace("px")) * 1.15) + "px", clef, 100, 1000);
    });

    bitems.forEach(function(item, index) {
        item.addEventListener('click', event => {
            buyitem(bitems, item, index, 1);
        });
    });

    setInterval(function() { //clock
        if (respersec > 0) {
            addresin(respersec / 2);
        }
        bitems.forEach(function(item, index) {
            if (resin < items[index][0]) {
                item.classList.add("cantbuy");
            }
        });
        document.cookie = `save =[${resin},${respersec},${respcl},${JSON.stringify(items)}]; max-age=31536000; SameSite=None; Secure`;
    }, 500); //not per second bcs it do be long
});

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}
const times = x => f => {
    if (x > 0) {
        f()
        times(x - 1)(f)
    }
}

function buyitem(bitems, item, index, amount) {
    function buyaction() {
        if (item.classList.contains("disabled") != true && resin >= items[index][0]) {
            addresin(-items[index][0]);
            addrps(items[index][1]);
            items[index][0] = parseInt(items[index][0] * 1.2);
            items[index][2]++;
            item.querySelector(".iprice").textContent = `Price: ${numtostr(items[index][0])}`;
            item.querySelector(".icount").textContent = numtostr(items[index][2]);
            if (items[index][2] == 1 && bitems[index + 1] != undefined) {
                bitems[index + 1].classList.remove("disabled");
            }
            respcl = parseInt((respersec / 50) + 1);
        }
    }
    times(amount)(() => buyaction())
}

function addresin(amt) {
    resin = resin + amt;
    document.querySelector(".ttl").textContent = numtostr(resin) + " resin";
}

function setresin(amt) {
    resin = amt;
    document.querySelector(".ttl").textContent = numtostr(resin) + " resin";
}

function numtostr(number) {
    var nloc = "";
    var resloc = 0;
    if (number < 1000) { //before you curse me for writing if else, this was the most optimised method.
        resloc = number;
        nloc = numericallocs[0];
    } else if (number < (10 ** 6)) { //thousand
        resloc = parseFloat(number / (10 ** 3)).toFixed(3);
        nloc = numericallocs[1];
    } else if (number < (10 ** 9)) { //million
        resloc = parseFloat(number / (10 ** 6)).toFixed(3);
        nloc = numericallocs[2];
    } else if (number < (10 ** 12)) { //billion
        resloc = parseFloat(number / (10 ** 9)).toFixed(3);
        nloc = numericallocs[3];
    } else if (number < (10 ** 15)) { //trillion
        resloc = parseFloat(number / (10 ** 12)).toFixed(3);
        nloc = numericallocs[4];
    } else if (number < (10 ** 18)) {
        resloc = parseFloat(number / (10 ** 15)).toFixed(3);
        nloc = numericallocs[5];
    } else if (number < (10 ** 21)) {
        resloc = parseFloat(number / (10 ** 18)).toFixed(3);
        nloc = numericallocs[6];
    } else if (number < (10 ** 24)) {
        resloc = parseFloat(number / (10 ** 21)).toFixed(3);
        nloc = numericallocs[7];
    } else if (number < (10 ** 27)) {
        resloc = parseFloat(number / (10 ** 24)).toFixed(3);
        nloc = numericallocs[8];
    } else if (number < (10 ** 30)) {
        resloc = parseFloat(number / (10 ** 27)).toFixed(3);
        nloc = numericallocs[9];
    } else if (number < (10 ** 33)) {
        resloc = parseFloat(number / (10 ** 30)).toFixed(3);
        nloc = numericallocs[10];
    } else if (number < (10 ** 36)) {
        resloc = parseFloat(number / (10 ** 33)).toFixed(3);
        nloc = numericallocs[11];
    } else if (number < (10 ** 39)) {
        resloc = parseFloat(number / (10 ** 36)).toFixed(3);
        nloc = numericallocs[12];
    } else if (number < (10 ** 42)) {
        resloc = parseFloat(number / (10 ** 39)).toFixed(3);
        nloc = numericallocs[13];
    } else if (number < (10 ** 45)) {
        resloc = parseFloat(number / (10 ** 42)).toFixed(3);
        nloc = numericallocs[14];
    } else if (number < (10 ** 48)) {
        resloc = parseFloat(number / (10 ** 45)).toFixed(3);
        nloc = numericallocs[15];
    } else if (number < (10 ** 51)) {
        resloc = parseFloat(number / (10 ** 48)).toFixed(3);
        nloc = numericallocs[16];
    } else if (number < (10 ** 54)) {
        resloc = parseFloat(number / (10 ** 51)).toFixed(3);
        nloc = numericallocs[17];
    } else if (number < (10 ** 57)) {
        resloc = parseFloat(number / (10 ** 54)).toFixed(3);
        nloc = numericallocs[18];
    } else if (number < (10 ** 60)) {
        resloc = parseFloat(number / (10 ** 57)).toFixed(3);
        nloc = numericallocs[19];
    } else if (number < (10 ** 63)) {
        resloc = parseFloat(number / (10 ** 60)).toFixed(3);
        nloc = numericallocs[20];
    } else if (number < (10 ** 66)) {
        resloc = parseFloat(number / (10 ** 63)).toFixed(3);
        nloc = numericallocs[21];
    } else if (number < (10 ** 69)) {
        resloc = parseFloat(number / (10 ** 66)).toFixed(3);
        nloc = numericallocs[22];
    } else if (number < (10 ** 72)) {
        resloc = parseFloat(number / (10 ** 69)).toFixed(3);
        nloc = numericallocs[23];
    } else if (number < (10 ** 75)) {
        resloc = parseFloat(number / (10 ** 72)).toFixed(3);
        nloc = numericallocs[24];
    } else if (number < (10 ** 78)) {
        resloc = parseFloat(number / (10 ** 75)).toFixed(3);
        nloc = numericallocs[25];
    } else if (number < (10 ** 81)) {
        resloc = parseFloat(number / (10 ** 78)).toFixed(3);
        nloc = numericallocs[26];
    } else if (number < (10 ** 84)) {
        resloc = parseFloat(number / (10 ** 81)).toFixed(3);
        nloc = numericallocs[27];
    } else if (number < (10 ** 87)) {
        resloc = parseFloat(number / (10 ** 84)).toFixed(3);
        nloc = numericallocs[28];
    } else if (number < (10 ** 90)) {
        resloc = parseFloat(number / (10 ** 87)).toFixed(3);
        nloc = numericallocs[29];
    } else if (number < (10 ** 93)) {
        resloc = parseFloat(number / (10 ** 90)).toFixed(3);
        nloc = numericallocs[30];
    } else if (number < (10 ** 96)) {
        resloc = parseFloat(number / (10 ** 93)).toFixed(3);
        nloc = numericallocs[31];
    } else if (number < (10 ** 99)) {
        resloc = parseFloat(number / (10 ** 96)).toFixed(3);
        nloc = numericallocs[32];
    } else {
        resloc = parseFloat(number / (10 ** 99)).toFixed(3);
        nloc = numericallocs[33];
    }
    return `${parseFloat(resloc)} ${nloc}`;
}

function addrps(amt) {
    respersec += amt;
    document.querySelector(".per").textContent = `per interval : ${numtostr(respersec)}`;
}

function setrps(amt) {
    respersec = amt;
    document.querySelector(".per").textContent = `per interval : ${numtostr(respersec)}`;
}

function spawn_effect(x, y, effect, time, eod) {
    //spawns said effect on given (x,y) in given time interval
    //effect is the element
    effect.style.left = x;
    effect.style.top = y;
    document.body.prepend(effect);
    if (time != undefined) {
        setTimeout(() => {
            effect.classList.add("hidden");
            setTimeout(() => { effect.remove() }, eod);
        }, time);
    }
}