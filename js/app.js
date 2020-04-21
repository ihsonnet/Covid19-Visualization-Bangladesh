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
document.getElementById("affday").innerHTML = data.last24HourAffected;
document.getElementById("recday").innerHTML = data.last24HourRecovered;
document.getElementById("detday").innerHTML = data.last24HourDeath;

var dha = data.totalRecovered;
