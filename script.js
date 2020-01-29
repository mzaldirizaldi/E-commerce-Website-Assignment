/*global alert*/

function notify() { 'use strict'; alert('PT Indofood Sukses Makmur Tbk, better known as Indofood, is a major Indonesian company involved in the food industry. The companys headquarters are in Jakarta.'); }

function loginpage() { 'use strict'; var x = document.getElementById("loginwrap"); if (x.style.display === "block") { x.style.display = "none"; } else { x.style.display = "block"; } }

function category() { 'use strict'; var x = document.getElementById("categorywrap"); if (x.style.display === "block") { x.style.display = "none"; } else { x.style.display = "block"; } }

function hoodie() { 'use strict'; var x = document.getElementById("hoodie"); localStorage.clear(); if (x.style.display === "block") { x.style.display = "none"; } else { x.style.display = "block"; }
                   document.getElementById("result").innerHTML = "You ordered " + localStorage.clickcount + " hoodie"; }

function cancel() { 'use strict'; var x = document.getElementById("hoodie"); if (x.style.display === "block") { x.style.display = "none"; } else { x.style.display = "block"; } localStorage.clear();
                   document.getElementById("result").innerHTML = "You ordered nothing"; }

function total() { 'use strict'; var x = document.getElementById("totalwrap"); if (x.style.display === "none") { x.style.display = "block"; } else { x.style.display = "none"; } }

function plus() { 'use strict'; if (typeof (Storage) !== "undefined") { if (localStorage.clickcount) { localStorage.clickcount = Number(localStorage.clickcount) + 1; } else { localStorage.clickcount = 1; } document.getElementById("result").innerHTML = "You ordered " + localStorage.clickcount + " hoodie"; } if (localStorage.clickcount < 0) { document.getElementById("result").innerHTML = "You ordered nothing"; localStorage.clear(); } }

function minus() { 'use strict'; if (typeof (Storage) !== "undefined") { if (localStorage.clickcount) { localStorage.clickcount = Number(localStorage.clickcount) - 1; } else { localStorage.clickcount = 1; } document.getElementById("result").innerHTML = "You ordered " + localStorage.clickcount + " hoodie"; } if (localStorage.clickcount < 0) { document.getElementById("result").innerHTML = "You ordered nothing"; } }

function confirm() { 'use strict'; var x = document.getElementById("hoodie"); if (x.style.display === "block") { x.style.display = "none"; } else { x.style.display = "block"; } document.getElementById("result").innerHTML = "You ordered " + localStorage.clickcount + " hoodie"; }