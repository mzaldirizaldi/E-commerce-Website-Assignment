function notify()
{
    alert('PT Indofood Sukses Makmur Tbk, better known as Indofood, is a major Indonesian company involved in the food industry. The companys headquarters are in Jakarta.')
}

function loginpage()
{
  var x = document.getElementById("loginwrap");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function category()
{
  var x = document.getElementById("categorywrap");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function hoodie()
{
      var x = document.getElementById("hoodie");
    localStorage.clear();
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
       document.getElementById("result").innerHTML = "You ordered " + localStorage.clickcount + " hoodie";
}
function cancel()
{
      var x = document.getElementById("hoodie");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
    localStorage.clear()
document.getElementById("result").innerHTML = "You ordered nothing";
}

function total()
{
    var x = document.getElementById("totalwrap");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function plus() {
  if (typeof(Storage) !== "undefined") {
    if (localStorage.clickcount) {
      localStorage.clickcount = Number(localStorage.clickcount)+1;
    } else {
      localStorage.clickcount = 1;
    }
    document.getElementById("result").innerHTML = "You ordered " + localStorage.clickcount + " hoodie";
  }
    if(localStorage.clickcount < 0) {
    document.getElementById("result").innerHTML = "You ordered nothing";
    localStorage.clear();
  }
}
function minus() {
  if (typeof(Storage) !== "undefined") {
    if (localStorage.clickcount) {
      localStorage.clickcount = Number(localStorage.clickcount)-1;
    } else {
      localStorage.clickcount = 1;
    }
    document.getElementById("result").innerHTML = "You ordered " + localStorage.clickcount + " hoodie";
  } if(localStorage.clickcount < 0) {
    document.getElementById("result").innerHTML = "You ordered nothing";
  }
}

function confirm()
{
    var x = document.getElementById("hoodie");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
    document.getElementById("result").innerHTML = "You ordered " + localStorage.clickcount + " hoodie";
}