/*global alert*/
/* eslint-env browser */
/* eslint-disable no-unused-vars */

function notify() { 'use strict'; alert('PT Indofood Sukses Makmur Tbk, better known as Indofood, is a major Indonesian company involved in the food industry. The companys headquarters are in Jakarta.'); }

function loginpage() { 'use strict'; var x = document.getElementById("loginwrap"); if (x.style.display === "block") { x.style.display = "none"; } else { x.style.display = "block"; } }

function category() { 'use strict'; var x = document.getElementById("categorywrap"); if (x.style.display === "block") { x.style.display = "none"; } else { x.style.display = "block"; } }

function hoodie() { 'use strict'; 
                   var x = document.getElementById("hoodie"); 
                   var y = document.getElementById("hat");
                   var z = document.getElementById("shoes");
                   var a = document.getElementById("smartwatch");
                   var b = document.getElementById("imageintotal");
                   localStorage.clear();
                   if (x.style.display === "none") { x.style.display = "block"; y.style.display = "none"; z.style.display = "none"; a.style.display = "none"; } else { x.style.display = "none";}}

function hat() {  'use strict'; 
                   var x = document.getElementById("hoodie"); 
                   var y = document.getElementById("hat");
                   var z = document.getElementById("shoes");
                   var a = document.getElementById("smartwatch");
                   var b = document.getElementById("imageintotal");
                   localStorage.clear();
                   if (y.style.display === "none") { y.style.display = "block"; x.style.display = "none"; z.style.display = "none"; a.style.display = "none"; } else { x.style.display = "none";}}

function shoes() {  'use strict'; 
                   var x = document.getElementById("hoodie"); 
                   var y = document.getElementById("hat");
                   var z = document.getElementById("shoes");
                   var a = document.getElementById("smartwatch");
                   var b = document.getElementById("imageintotal");
                   localStorage.clear();
                   if (z.style.display === "none") { z.style.display = "block"; y.style.display = "none"; x.style.display = "none"; a.style.display = "none"; } else { x.style.display = "none";}}

function smartwatch() {  'use strict'; 
                   var x = document.getElementById("hoodie"); 
                   var y = document.getElementById("hat");
                   var z = document.getElementById("shoes");
                   var a = document.getElementById("smartwatch");
                   var b = document.getElementById("imageintotal");
                   localStorage.clear();
                   if (a.style.display === "none") { a.style.display = "block"; y.style.display = "none"; z.style.display = "none"; x.style.display = "none"; } else { x.style.display = "none";}}

function cartpicture() {'use strict'; var y = document.getElementById("imageintotal"); if (y.style.opacity === "0%") {y.style.opacity = "100%"; } else {y.style.opacity = "0%"; } }

function cancel() { 'use strict'; var x = document.getElementById("hoodie"); if (x.style.display === "none") { x.style.display = "none"; } else { x.style.display = "block"; } localStorage.clear(); document.getElementById("result").innerHTML = "You ordered nothing"; }

function total() { 'use strict';
var x = document.getElementById("totalwrap");
var y = document.getElementById("imageintotal");
if(y.style.visibility === "hidden"){y.style.visibility = "visible"}else{y.style.visibility = "hidden"}
if (x.style.display === "none") { x.style.display = "block"; } else { x.style.display = "none";} }

function plus() { 'use strict'; if (typeof (Storage) !== "undefined") { if (localStorage.clickcount) { localStorage.clickcount = Number(localStorage.clickcount) + 1; } else { localStorage.clickcount = 1; } document.getElementById("result").innerHTML = "You ordered " + localStorage.clickcount + " hoodie"; } if (localStorage.clickcount < 0) { document.getElementById("result").innerHTML = "You ordered nothing"; localStorage.clear(); } }

function minus() { 'use strict'; if (typeof (Storage) !== "undefined") { if (localStorage.clickcount) { localStorage.clickcount = Number(localStorage.clickcount) - 1; } else { localStorage.clickcount = -1; } document.getElementById("result").innerHTML = "You ordered " + localStorage.clickcount + " hoodie"; } if (localStorage.clickcount < 0) { document.getElementById("result").innerHTML = " "; localStorage.clear(); } }

function confirm() { 
    alert('Thanks for your purchase');
    var x = document.getElementById("totalwrap")
    if(x.style.display === "block"){x.style.display = "none";}else{x.style.display = "none";}
    localStorage.clear();
}
function myBtn(){
var modal = document.getElementById("myModal");
if (modal.style.display === "none") { modal.style.display = "block"; } else { modal.style.display = "block"; }}

function close1(){
 var modal = document.getElementById("myModal");
if (modal.style.display === "block") { modal.style.display = "none"; } else { modal.style.display = "none"; }}

var i = 0;
var images = [];
var time = 3000;

images[0] = 'img/image1.jpg';
images[1] = 'img/image2.jpg';
images[2] = 'img/image3.jpg';

function changeImg() { 'use strict'; document.getElementById('frame1').src = images[i]; if (i < images.length - 1) { i += 1; } else { i = 0; } setTimeout("changeImg()", time); }

window.onload = changeImg;