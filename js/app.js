let yourUrl = 'https://covid19statbd.herokuapp.com/getData/bd';
function Get(yourUrl){
    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET",yourUrl,false);
    Httpreq.send(null);
    return Httpreq.responseText;
}

var data = JSON.parse(Get("https://covid19statbd.herokuapp.com/getData/bd"));
document.getElementById("aff").innerHTML = data.totalAffected;
document.getElementById("rec").innerHTML = data.totalRecovered;
document.getElementById("det").innerHTML = data.totalDeath;
document.getElementById("stat").innerHTML = data.covidVirusStat;
