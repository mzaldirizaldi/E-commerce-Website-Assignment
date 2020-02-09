/*global alert*/
/* eslint-env browser */
/* eslint-disable no-unused-vars */
function indofood() {'use strict'; var modal = document.getElementById("myModal1");
            if (modal.style.display === "none") { modal.style.display = "block"; } else { modal.style.display = "block"; }
            var xhr = new XMLHttpRequest();
            var url = "Description.txt";

            xhr.onerror = function () { alert("Failed to get data");
            };

            xhr.onloadend = function () { if (this.responseText !== "") {
                    var data = JSON.parse(this.responseText);
                    var img = document.createElement("img");
                    img.src = data.indofoodimg;
                    var desc = document.createElement("p");
                    desc.innerHTML = data.indofood;

                    document.getElementById("result1").append(img, desc);
                    document.getElementById("button").innerHTML = "Done";

                    setTimeout(function () {
                    }, 3000);
                }
            };

            xhr.open("GET", url, true);
            xhr.send();
        }
function close2(){
 var modal = document.getElementById("myModal1");
if (modal.style.display === "block") { modal.style.display = "none"; } else { modal.style.display = "none"; }
document.getElementById("result1").innerHTML = "";
    document.getElementById("result2").innerHTML = "";
}
function nike() {
            var modal = document.getElementById("myModal1");
            if (modal.style.display === "none") { modal.style.display = "block"; } else { modal.style.display = "block"; }
            var xhr = new XMLHttpRequest();
            var url = "Description.txt";


            xhr.onerror = function () {
                alert("Failed to get data");
            };

            xhr.onloadend = function () {
                if (this.responseText !== "") {
                    var data = JSON.parse(this.responseText);
                    var img = document.createElement("img");
                    img.src = data.nikeimg;
                    var desc = document.createElement("p");
                    desc.innerHTML = data.nike;

                    document.getElementById("result1").append(img, desc);
                    document.getElementById("button").innerHTML = "Done";

                    setTimeout(function () {
                    }, 3000);
                }
            };

            xhr.open("GET", url, true);
            xhr.send();
        }
function adidas() {
            var modal = document.getElementById("myModal1");
            if (modal.style.display === "none") { modal.style.display = "block"; } else { modal.style.display = "block"; }
            var xhr = new XMLHttpRequest();
            var url = "Description.txt";


            xhr.onerror = function () {
                alert("Failed to get data");
            };

            xhr.onloadend = function () {
                if (this.responseText !== "") {
                    var data = JSON.parse(this.responseText);
                    var img = document.createElement("img");
                    img.src = data.adidasimg;
                    var desc = document.createElement("p");
                    desc.innerHTML = data.adidas;
                    
                    document.getElementById("result1").append( img, desc);

                    setTimeout(function () {
                    }, 3000);
                }
            };

            xhr.open("GET", url, true);
            xhr.send();
        }
function billion() {
            var modal = document.getElementById("myModal1");
            if (modal.style.display === "none") { modal.style.display = "block"; } else { modal.style.display = "block"; }
            var xhr = new XMLHttpRequest();
            var url = "Description.txt";


            xhr.onerror = function () {
                alert("Failed to get data");
            };

            xhr.onloadend = function () {
                if (this.responseText !== "") {
                    var data = JSON.parse(this.responseText);
                    var img = document.createElement("img");
                    img.src = data.billionaireimg;
                    var desc = document.createElement("p");
                    desc.innerHTML = data.billionaire;

                    document.getElementById("result1").append(img, desc);
                    document.getElementById("button").innerHTML = "Done";

                    setTimeout(function () {
                    }, 3000);
                }
            };

            xhr.open("GET", url, true);
            xhr.send();
        }
function ahha() {
            var modal = document.getElementById("myModal1");
            if (modal.style.display === "none") { modal.style.display = "block"; } else { modal.style.display = "block"; }
            var xhr = new XMLHttpRequest();
            var url = "Description.txt";


            xhr.onerror = function () {
                alert("Failed to get data");
            };

            xhr.onloadend = function () {
                if (this.responseText !== "") {
                    var data = JSON.parse(this.responseText);
                    var img = document.createElement("img");
                    img.src = data.ahhaimg;
                    var desc = document.createElement("p");
                    desc.innerHTML = data.ahha;

                    document.getElementById("result1").append(img, desc);
                    document.getElementById("button").innerHTML = "Done";

                    setTimeout(function () {
                    }, 3000);
                }
            };

            xhr.open("GET", url, true);
            xhr.send();
        }
function supreme() {
            var modal = document.getElementById("myModal1");
            if (modal.style.display === "none") { modal.style.display = "block"; } else { modal.style.display = "block"; }
            var xhr = new XMLHttpRequest();
            var url = "Description.txt";


            xhr.onerror = function () {
                alert("Failed to get data");
            };

            xhr.onloadend = function () {
                if (this.responseText !== "") {
                    var data = JSON.parse(this.responseText);
                    var img = document.createElement("img");
                    img.src = data.supremeimg;
                    var desc = document.createElement("p");
                    desc.innerHTML = data.supreme;

                    document.getElementById("result1").append(img, desc);
                    document.getElementById("button").innerHTML = "Done";

                    setTimeout(function () {
                    }, 3000);
                }
            };

            xhr.open("GET", url, true);
            xhr.send();
        }
function flashsale() {
            var modal = document.getElementById("myModal1");
            if (modal.style.display === "none") { modal.style.display = "block"; } else { modal.style.display = "block"; }
            var xhr = new XMLHttpRequest();
            var url = "Description.txt";


            xhr.onerror = function () {
                alert("Failed to get data");
            };

            xhr.onloadend = function () {
                if (this.responseText !== "") {
                    var data = JSON.parse(this.responseText);
                    var img = document.createElement("img");
                    img.src = data.flashsaleimg;
                    var desc = document.createElement("p");
                    desc.innerHTML = data.flashsale;

                    document.getElementById("result2").append(img, desc);
                    document.getElementById("button").innerHTML = "Done";

                    setTimeout(function () {
                    }, 3000);
                }
            };

            xhr.open("GET", url, true);
            xhr.send();
        }
function indomie() {
            var modal = document.getElementById("myModal1");
            if (modal.style.display === "none") { modal.style.display = "block"; } else { modal.style.display = "block"; }
            var xhr = new XMLHttpRequest();
            var url = "Description.txt";


            xhr.onerror = function () {
                alert("Failed to get data");
            };

            xhr.onloadend = function () {
                if (this.responseText !== "") {
                    var data = JSON.parse(this.responseText);
                    var img = document.createElement("img");
                    img.src = data.indomieimg;
                    var imgage = document.createElement("img");
                    imgage.src = data.indomieimg1;
                    var desc = document.createElement("p");
                    desc.innerHTML = data.indomie;
                    var description = document.createElement("p");
                    description.innerHTML = data.indomie1;
                    
                    document.getElementById("result2").append(desc, img, description, imgage);
                    document.getElementById("button").innerHTML = "Done";

                    setTimeout(function () {
                    }, 3000);
                }
            };

            xhr.open("GET", url, true);
            xhr.send();
        }
function donate() {
            var modal = document.getElementById("myModal1");
            if (modal.style.display === "none") { modal.style.display = "block"; } else { modal.style.display = "block"; }
            var xhr = new XMLHttpRequest();
            var url = "Description.txt";


            xhr.onerror = function () {
                alert("Failed to get data");
            };

            xhr.onloadend = function () {
                if (this.responseText !== "") {
                    var data = JSON.parse(this.responseText);
                    var img = document.createElement("img");
                    img.src = data.donateimg;
                    var desc = document.createElement("p");
                    desc.innerHTML = data.donate;

                    document.getElementById("result1").append(img, desc);
                    document.getElementById("button").innerHTML = "Done";

                    setTimeout(function () {
                    }, 3000);
                }
            };

            xhr.open("GET", url, true);
            xhr.send();
        }