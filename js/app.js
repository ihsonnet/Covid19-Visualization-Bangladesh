let yourUrl = 'https://covid19statbd.herokuapp.com/data/bd';
function Get(yourUrl){
    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET",yourUrl,false);
    Httpreq.send(null);
    //console.log(Httpreq.responseText)
    //console.log(Httpreq.responseText.updateTime)
    return Httpreq.responseText;
}

var data = JSON.parse(Get("https://covid19statbd.herokuapp.com/data/bd"));
document.getElementById("aff").innerHTML = data.totalAffected;
document.getElementById("rec").innerHTML = data.totalRecovered;
document.getElementById("det").innerHTML = data.totalDeath;
document.getElementById("affday").innerHTML = data.last24HourAffected;
document.getElementById("recday").innerHTML = data.last24HourRecovered;
document.getElementById("detday").innerHTML = data.last24HourDeath;

document.getElementById("testday").innerHTML = data.last24HourTested;
document.getElementById("test").innerHTML = data.totalTested;
document.getElementById("perce").innerHTML = data.affectedPercentage;
document.getElementById("updtime").innerHTML = data.updateTime;

var dha = data.totalRecovered;

//dhaka

  function dhaka() {
    swal({
  title: "ঢাকা জেলা - "+data.dhaka[0]['affectedNumber'],
  text: "সর্বশেষ তথ্য অনুযায়ী ঢাকা জেলায় মোট আক্রান্ত " + data.dhaka[0]['affectedNumber'] +" জন \n"+"   "+"এবং পুরো ঢাকা বিভাগে মোট আক্রান্ত হয়েছে "+data.dhakaDivisionAffected +" জন",
  icon: "img/corona60.png"
});}
  function tangail() {
    swal({
  title: "টাঙ্গাইল জেলা - "+data.dhaka[1]['affectedNumber'],
  text: "সর্বশেষ তথ্য অনুযায়ী টাঙ্গাইল জেলায় মোট আক্রান্ত " + data.dhaka[1]['affectedNumber'] +" জন \n"+"   "+"এবং পুরো ঢাকা বিভাগে মোট আক্রান্ত হয়েছে "+data.dhakaDivisionAffected +" জন",
  icon: "img/corona60.png"
  });
    }

  function Gazipur() {
    swal({
  title: "গাজীপুর জেলা - "+data.dhaka[2]['affectedNumber'],
  text: "সর্বশেষ তথ্য অনুযায়ী গাজীপুর জেলায় মোট আক্রান্ত " + data.dhaka[2]['affectedNumber'] +" জন \n"+"   "+"এবং পুরো ঢাকা বিভাগে মোট আক্রান্ত হয়েছে "+data.dhakaDivisionAffected +" জন",
  icon: "img/corona60.png"
  });
    }

  function Narsingdi() {
    swal({
  title: "নরসিংদী জেলা - "+data.dhaka[3]['affectedNumber'],
  text: "সর্বশেষ তথ্য অনুযায়ী নরসিংদী জেলায় মোট আক্রান্ত " + data.dhaka[3]['affectedNumber'] +" জন \n"+"   "+"এবং পুরো ঢাকা বিভাগে মোট আক্রান্ত হয়েছে "+data.dhakaDivisionAffected +" জন",
  icon: "img/corona60.png"
  });
    }

  function Narayanganj() {
    swal({
  title: "নারায়ণগঞ্জ জেলা - "+data.dhaka[4]['affectedNumber'],
  text: "সর্বশেষ তথ্য অনুযায়ী নারায়ণগঞ্জ জেলায় মোট আক্রান্ত " + data.dhaka[4]['affectedNumber'] +" জন \n"+"   "+"এবং পুরো ঢাকা বিভাগে মোট আক্রান্ত হয়েছে "+data.dhakaDivisionAffected +" জন",
  icon: "img/corona60.png"
  });
    }

  function Faridpur() {
    swal({
  title: "ফরিদপুর জেলা - "+data.dhaka[5]['affectedNumber'],
  text: "সর্বশেষ তথ্য অনুযায়ী ফরিদপুর জেলায় মোট আক্রান্ত " + data.dhaka[5]['affectedNumber'] +" জন \n"+"   "+"এবং পুরো ঢাকা বিভাগে মোট আক্রান্ত হয়েছে "+data.dhakaDivisionAffected +" জন",
  icon: "img/corona60.png"
  });
    }

  function Madaripur() {
    swal({
  title: "মাদারীপুর জেলা - "+data.dhaka[6]['affectedNumber'],
  text: "সর্বশেষ তথ্য অনুযায়ী মাদারীপুর জেলায় মোট আক্রান্ত " + data.dhaka[6]['affectedNumber'] +" জন \n"+"   "+"এবং পুরো ঢাকা বিভাগে মোট আক্রান্ত হয়েছে "+data.dhakaDivisionAffected +" জন",
  icon: "img/corona60.png"
  });
    }

  function Munshiganj() {
    swal({
  title: "মুন্সীগঞ্জ জেলা - "+data.dhaka[7]['affectedNumber'],
  text: "সর্বশেষ তথ্য অনুযায়ী টমুন্সীগঞ্জ জেলায় মোট আক্রান্ত " + data.dhaka[7]['affectedNumber'] +" জন \n"+"   "+"এবং পুরো ঢাকা বিভাগে মোট আক্রান্ত হয়েছে "+data.dhakaDivisionAffected +" জন",
  icon: "img/corona60.png"
  });
    }

  function Shariatpur() {
    swal({
  title: "শরীয়তপুর জেলা - "+data.dhaka[8]['affectedNumber'],
  text: "সর্বশেষ তথ্য অনুযায়ী শরীয়তপুর জেলায় মোট আক্রান্ত " + data.dhaka[8]['affectedNumber'] +" জন \n"+"   "+"এবং পুরো ঢাকা বিভাগে মোট আক্রান্ত হয়েছে "+data.dhakaDivisionAffected +" জন",
  icon: "img/corona60.png"
  });
    }

  function Gopalganj() {
    swal({
  title: "গোপালগঞ্জ জেলা - "+data.dhaka[9]['affectedNumber'],
  text: "সর্বশেষ তথ্য অনুযায়ী গোপালগঞ্জ জেলায় মোট আক্রান্ত " + data.dhaka[9]['affectedNumber'] +" জন \n"+"   "+"এবং পুরো ঢাকা বিভাগে মোট আক্রান্ত হয়েছে "+data.dhakaDivisionAffected +" জন",
  icon: "img/corona60.png"
  });
    }

  function Rajbari() {
    swal({
  title: "রাজবাড়ী জেলা - "+data.dhaka[10]['affectedNumber'],
  text: "সর্বশেষ তথ্য অনুযায়ী রাজবাড়ী জেলায় মোট আক্রান্ত " + data.dhaka[10]['affectedNumber'] +" জন \n"+"   "+"এবং পুরো ঢাকা বিভাগে মোট আক্রান্ত হয়েছে "+data.dhakaDivisionAffected +" জন",
  icon: "img/corona60.png"
  });
    }

  function Manikganj() {
    swal({
  title: "মানিকগঞ্জ জেলা - "+data.dhaka[11]['affectedNumber'],
  text: "সর্বশেষ তথ্য অনুযায়ী মানিকগঞ্জ জেলায় মোট আক্রান্ত " + data.dhaka[11]['affectedNumber'] +" জন \n"+"   "+"এবং পুরো ঢাকা বিভাগে মোট আক্রান্ত হয়েছে "+data.dhakaDivisionAffected +" জন",
  icon: "img/corona60.png"
  });
    }
    function Kisurganj() {
      swal({
    title: "কিশোরগঞ্জ জেলা - "+data.dhaka[12]['affectedNumber'],
    text: "সর্বশেষ তথ্য অনুযায়ী কিশোরগঞ্জ জেলায় মোট আক্রান্ত " + data.dhaka[12]['affectedNumber'] +" জন \n"+"   "+"এবং পুরো ঢাকা বিভাগে মোট আক্রান্ত হয়েছে "+data.dhakaDivisionAffected +" জন",
    icon: "img/corona60.png"
    });
      }


//chittagong

  function Chittagong() {
    swal({
  title: "চট্টগ্রাম জেলা - "+data.chittagong[0]['affectedNumber'],
  text: "সর্বশেষ তথ্য অনুযায়ী চট্টগ্রাম জেলায় মোট আক্রান্ত " + data.chittagong[0]['affectedNumber'] +" জন \n"+"   "+"এবং পুরো চট্টগ্রাম বিভাগে মোট আক্রান্ত হয়েছে "+data.chittagongDivisionAffected +" জন",
  icon: "img/corona60.png"
  });
    }
  function cumilla() {
    swal({
  title: "কুমিল্লা জেলা - "+data.chittagong[1]['affectedNumber'],
  text: "সর্বশেষ তথ্য অনুযায়ী কুমিল্লা জেলায় মোট আক্রান্ত " + data.chittagong[1]['affectedNumber'] +" জন \n"+"   "+"এবং পুরো চট্টগ্রাম বিভাগে মোট আক্রান্ত হয়েছে "+data.chittagongDivisionAffected +" জন",
  icon: "img/corona60.png"
  });
    }

    function CoxsBazar() {
      swal({
    title: "কক্সবাজার জেলা - "+data.chittagong[2]['affectedNumber'],
    text: "সর্বশেষ তথ্য অনুযায়ী কক্সবাজার জেলায় মোট আক্রান্ত " + data.chittagong[2]['affectedNumber'] +" জন \n"+"   "+"এবং পুরো চট্টগ্রাম বিভাগে মোট আক্রান্ত হয়েছে "+data.chittagongDivisionAffected +" জন",
    icon: "img/corona60.png"
    });
      }

      function Noakhali() {
        swal({
      title: "নোয়াখালী জেলা - "+data.chittagong[3]['affectedNumber'],
      text: "সর্বশেষ তথ্য অনুযায়ী নোয়াখালী জেলায় মোট আক্রান্ত " +data.chittagong[3]['affectedNumber']+" জন \n"+"   "+"এবং পুরো চট্টগ্রাম বিভাগে মোট আক্রান্ত হয়েছে "+data.chittagongDivisionAffected +" জন",
      icon: "img/corona60.png"
      });
        }
        function Bbaria() {
          swal({
        title: "ব্রাহ্মণবাড়িয়া জেলা - "+data.chittagong[4]['affectedNumber'],
        text: "সর্বশেষ তথ্য অনুযায়ী ব্রাহ্মণবাড়িয়া জেলায় মোট আক্রান্ত " +data.chittagong[4]['affectedNumber']+" জন \n"+"   "+"এবং পুরো চট্টগ্রাম বিভাগে মোট আক্রান্ত হয়েছে "+data.chittagongDivisionAffected +" জন",
        icon: "img/corona60.png"
        });
          }

    function Chadpur() {
      swal({
    title: "চাঁদপুর জেলা - "+data.chittagong[5]['affectedNumber'],
    text: "সর্বশেষ তথ্য অনুযায়ী চাঁদপুরা জেলায় মোট আক্রান্ত " + data.chittagong[5]['affectedNumber'] +" জন \n"+"   "+"এবং পুরো চট্টগ্রাম বিভাগে মোট আক্রান্ত হয়েছে "+data.chittagongDivisionAffected +" জন",
    icon: "img/corona60.png"
    });
      }
      function Lakhsmipur() {
        swal({
      title: "লক্ষ্মীপুর জেলা - "+data.chittagong[6]['affectedNumber'],
      text: "সর্বশেষ তথ্য অনুযায়ী লক্ষ্মীপুর জেলায় মোট আক্রান্ত " + data.chittagong[6]['affectedNumber'] +" জন \n"+"   "+"এবং পুরো চট্টগ্রাম বিভাগে মোট আক্রান্ত হয়েছে "+data.chittagongDivisionAffected +" জন",
      icon: "img/corona60.png"
      });
        }
  function Feni() {
    swal({
  title: "ফেনী জেলা - "+data.chittagong[7]['affectedNumber'],
  text: "সর্বশেষ তথ্য অনুযায়ী ফেনী জেলায় মোট আক্রান্ত " + data.chittagong[7]['affectedNumber'] +" জন \n"+"   "+"এবং পুরো চট্টগ্রাম বিভাগে মোট আক্রান্ত হয়েছে "+data.chittagongDivisionAffected +" জন",
  icon: "img/corona60.png"
  });
    }
    function Khagrachari() {
      swal({
    title: "খাগড়াছড়ি জেলা - "+data.chittagong[8]['affectedNumber'],
    text: "সর্বশেষ তথ্য অনুযায়ী খাগড়াছড়ি জেলায় মোট আক্রান্ত " +data.chittagong[8]['affectedNumber']+" জন \n"+"   "+"এবং পুরো চট্টগ্রাম বিভাগে মোট আক্রান্ত হয়েছে "+data.chittagongDivisionAffected +" জন",
    icon: "img/corona60.png"
    });
      }
    function Rangamati() {
      swal({
    title: "রাঙ্গামাটি জেলা - "+data.chittagong[9]['affectedNumber'],
    text: "সর্বশেষ তথ্য অনুযায়ী রাঙ্গামাটি জেলায় মোট আক্রান্ত " +data.chittagong[9]['affectedNumber']+" জন \n"+"   "+"এবং পুরো চট্টগ্রাম বিভাগে মোট আক্রান্ত হয়েছে "+data.chittagongDivisionAffected +" জন",
    icon: "img/corona60.png"
    });
      }
    function Bandarban() {
      swal({
    title: "বান্দরবান জেলা - "+data.chittagong[10]['affectedNumber'],
    text: "সর্বশেষ তথ্য অনুযায়ী বান্দরবান জেলায় মোট আক্রান্ত " + data.chittagong[10]['affectedNumber'] +" জন \n"+"   "+"এবং পুরো চট্টগ্রাম বিভাগে মোট আক্রান্ত হয়েছে "+data.chittagongDivisionAffected +" জন",
    icon: "img/corona60.png"
    });
      }

//rajshahi

    function ChapaiNababgang() {
      swal({
    title: "চাঁপাইনবাবগঞ্জ জেলা - "+data.rajshahi[0]['affectedNumber'],
    text: "সর্বশেষ তথ্য অনুযায়ী চাঁপাইনবাবগঞ্জ জেলায় মোট আক্রান্ত " + data.rajshahi[0]['affectedNumber'] +" জন \n"+"   "+"এবং পুরো রাজশাহী বিভাগে মোট আক্রান্ত হয়েছে "+data.rajshahiDivisionAffected +" জন",
    icon: "img/corona60.png"
    });
      }

      function Jaypurhut() {
        swal({
      title: "জয়পুরহাট জেলা - "+data.rajshahi[1]['affectedNumber'],
      text: "সর্বশেষ তথ্য অনুযায়ী জয়পুরহাট জেলায় মোট আক্রান্ত " + data.rajshahi[1]['affectedNumber'] +" জন \n"+"   "+"এবং পুরো রাজশাহী বিভাগে মোট আক্রান্ত হয়েছে "+data.rajshahiDivisionAffected +" জন",
      icon: "img/corona60.png"
      });
        }

        function Naoga() {
          swal({
        title: "নওগাঁ জেলা - "+data.rajshahi[2]['affectedNumber'],
        text: "সর্বশেষ তথ্য অনুযায়ী নওগাঁ জেলায় মোট আক্রান্ত " + data.rajshahi[2]['affectedNumber'] +" জন \n"+"   "+"এবং পুরো রাজশাহী বিভাগে মোট আক্রান্ত হয়েছে "+data.rajshahiDivisionAffected +" জন",
        icon: "img/corona60.png"
        });
          }

        function Natore() {
          swal({
        title: "নাটোর জেলা - "+data.rajshahi[3]['affectedNumber'],
        text: "সর্বশেষ তথ্য অনুযায়ী নাটোর জেলায় মোট আক্রান্ত " + data.rajshahi[3]['affectedNumber'] +" জন \n"+"   "+"এবং পুরো রাজশাহী বিভাগে মোট আক্রান্ত হয়েছে "+data.rajshahiDivisionAffected +" জন",
        icon: "img/corona60.png"
        });
          }

          function Pabna() {
            swal({
          title: "পাবনা জেলা - "+data.rajshahi[4]['affectedNumber'],
          text: "সর্বশেষ তথ্য অনুযায়ী পাবনা জেলায় মোট আক্রান্ত " + data.rajshahi[4]['affectedNumber'] +" জন \n"+"   "+"এবং পুরো রাজশাহী বিভাগে মোট আক্রান্ত হয়েছে "+data.rajshahiDivisionAffected +" জন",
          icon: "img/corona60.png"
          });
            }
          function Sirajgang() {
            swal({
          title: "সিরাজগঞ্জ জেলা - "+data.rajshahi[5]['affectedNumber'],
          text: "সর্বশেষ তথ্য অনুযায়ী সিরাজগঞ্জ জেলায় মোট আক্রান্ত " + data.rajshahi[5]['affectedNumber'] +" জন \n"+"   "+"এবং পুরো রাজশাহী বিভাগে মোট আক্রান্ত হয়েছে "+data.rajshahiDivisionAffected +" জন",
          icon: "img/corona60.png"
          });
            }
            function Bagura() {
              swal({
            title: "বগুড়া জেলা - "+data.rajshahi[6]['affectedNumber'],
            text: "সর্বশেষ তথ্য অনুযায়ী বগুড়া জেলায় মোট আক্রান্ত " + data.rajshahi[6]['affectedNumber'] +" জন \n"+"   "+"এবং পুরো রাজশাহী বিভাগে মোট আক্রান্ত হয়েছে "+data.rajshahiDivisionAffected +" জন",
            icon: "img/corona60.png"
            });
              }

            function Rajshahi() {
              swal({
            title: "রাজশাহী জেলা - "+data.rajshahi[7]['affectedNumber'],
            text: "সর্বশেষ তথ্য অনুযায়ী রাজশাহী জেলায় মোট আক্রান্ত " + data.rajshahi[7]['affectedNumber'] +" জন \n"+"   "+"এবং পুরো রাজশাহী বিভাগে মোট আক্রান্ত হয়েছে "+data.rajshahiDivisionAffected +" জন",
            icon: "img/corona60.png"
            });
              }

//Khulna

  function Zessore() {
    swal({
  title: "যশোর জেলা - "+data.khulna[0]['affectedNumber'],
  text: "সর্বশেষ তথ্য অনুযায়ী যশোর জেলায় মোট আক্রান্ত " + data.khulna[0]['affectedNumber'] +" জন \n"+"   "+"এবং পুরো খুলনা বিভাগে মোট আক্রান্ত হয়েছে "+data.khulnaDivisionAffected +" জন",
  icon: "img/corona60.png"
  });
    }

    function Satkhira() {
      swal({
    title: "সাতক্ষীরা জেলা - "+data.khulna[1]['affectedNumber'],
    text: "সর্বশেষ তথ্য অনুযায়ী সাতক্ষীরা জেলায় মোট আক্রান্ত " + data.khulna[1]['affectedNumber'] +" জন \n"+"   "+"এবং পুরো খুলনা বিভাগে মোট আক্রান্ত হয়েছে "+data.khulnaDivisionAffected +" জন",
    icon: "img/corona60.png"
    });
      }

      function Meherpur() {
        swal({
      title: "মেহেরপুর জেলা - "+data.khulna[2]['affectedNumber'],
      text: "সর্বশেষ তথ্য অনুযায়ী মেহেরপুর জেলায় মোট আক্রান্ত " + data.khulna[2]['affectedNumber'] +" জন \n"+"   "+"এবং পুরো খুলনা বিভাগে মোট আক্রান্ত হয়েছে "+data.khulnaDivisionAffected +" জন",
      icon: "img/corona60.png"
      });
        }

        function Narail() {
          swal({
        title: "নড়াইল জেলা - "+data.khulna[3]['affectedNumber'],
        text: "সর্বশেষ তথ্য অনুযায়ী নড়াইল জেলায় মোট আক্রান্ত " + data.khulna[3]['affectedNumber'] +" জন \n"+"   "+"এবং পুরো খুলনা বিভাগে মোট আক্রান্ত হয়েছে "+data.khulnaDivisionAffected +" জন",
        icon: "img/corona60.png"
        });
          }
          function Chuadanga() {
            swal({
          title: "চুয়াডাঙা জেলা - "+data.khulna[4]['affectedNumber'],
          text: "সর্বশেষ তথ্য অনুযায়ী চুয়াডাঙা জেলায় মোট আক্রান্ত " + data.khulna[4]['affectedNumber'] +" জন \n"+"   "+"এবং পুরো খুলনা বিভাগে মোট আক্রান্ত হয়েছে "+data.khulnaDivisionAffected +" জন",
          icon: "img/corona60.png"
          });
            }

            function Kushtia() {
              swal({
            title: "কুষ্টিয়া জেলা - "+data.khulna[5]['affectedNumber'],
            text: "সর্বশেষ তথ্য অনুযায়ী কুষ্টিয়া জেলায় মোট আক্রান্ত " + data.khulna[5]['affectedNumber'] +" জন \n"+"   "+"এবং পুরো খুলনা বিভাগে মোট আক্রান্ত হয়েছে "+data.khulnaDivisionAffected +" জন",
            icon: "img/corona60.png"
            });
              }

              function Magura() {
                swal({
              title: "মাগুরা জেলা - "+data.khulna[6]['affectedNumber'],
              text: "সর্বশেষ তথ্য অনুযায়ী মাগুরা জেলায় মোট আক্রান্ত " + data.khulna[6]['affectedNumber'] +" জন \n"+"   "+"এবং পুরো খুলনা বিভাগে মোট আক্রান্ত হয়েছে "+data.khulnaDivisionAffected +" জন",
              icon: "img/corona60.png"
              });
                }

                function Khulna() {
                  swal({
                title: "খুলনা জেলা - "+data.khulna[7]['affectedNumber'],
                text: "সর্বশেষ তথ্য অনুযায়ী খুলনা জেলায় মোট আক্রান্ত " + data.khulna[7]['affectedNumber'] +" জন \n"+"   "+"এবং পুরো খুলনা বিভাগে মোট আক্রান্ত হয়েছে "+data.khulnaDivisionAffected +" জন",
                icon: "img/corona60.png"
                });
                  }

                  function Bagerhat() {
                    swal({
                  title: "বাগেরহাট জেলা - "+data.khulna[8]['affectedNumber'],
                  text: "সর্বশেষ তথ্য অনুযায়ী বাগেরহাট জেলায় মোট আক্রান্ত " + data.khulna[8]['affectedNumber'] +" জন \n"+"   "+"এবং পুরো খুলনা বিভাগে মোট আক্রান্ত হয়েছে "+data.khulnaDivisionAffected +" জন",
                  icon: "img/corona60.png"
                  });
                    }

                    function Zinaidah() {
                      swal({
                    title: "ঝিনাইদহ জেলা - "+data.khulna[9]['affectedNumber'],
                    text: "সর্বশেষ তথ্য অনুযায়ী ঝিনাইদহ জেলায় মোট আক্রান্ত " + data.khulna[9]['affectedNumber'] +" জন \n"+"   "+"এবং পুরো খুলনা বিভাগে মোট আক্রান্ত হয়েছে "+data.khulnaDivisionAffected +" জন",
                    icon: "img/corona60.png"
                    });
                      }

//barishal

  function Jhalkati() {
    swal({
  title: "ঝালকাঠী জেলা - "+data.barishal[0]['affectedNumber'],
  text: "সর্বশেষ তথ্য অনুযায়ী ঝালকাঠী জেলায় মোট আক্রান্ত " + data.barishal[0]['affectedNumber'] +" জন \n"+"   "+"এবং পুরো বরিশাল বিভাগে মোট আক্রান্ত হয়েছে "+data.barishalDivisionAffected +" জন",
  icon: "img/corona60.png"
  });
    }

    function Potuakhali() {
      swal({
    title: "পটুয়াখালী জেলা - "+data.barishal[1]['affectedNumber'],
    text: "সর্বশেষ তথ্য অনুযায়ী পটুয়াখালী জেলায় মোট আক্রান্ত " + data.barishal[1]['affectedNumber'] +" জন \n"+"   "+"এবং পুরো বরিশাল বিভাগে মোট আক্রান্ত হয়েছে "+data.barishalDivisionAffected +" জন",
    icon: "img/corona60.png"
    });
      }

      function Pirojpur() {
        swal({
      title: "পিরোজপুর জেলা - "+data.barishal[2]['affectedNumber'],
      text: "সর্বশেষ তথ্য অনুযায়ী পিরোজপুর জেলায় মোট আক্রান্ত " + data.barishal[2]['affectedNumber'] +" জন \n"+"   "+"এবং পুরো বরিশাল বিভাগে মোট আক্রান্ত হয়েছে "+data.barishalDivisionAffected +" জন",
      icon: "img/corona60.png"
      });
        }

        function Barisal() {
          swal({
        title: "বরিশাল জেলা - "+data.barishal[3]['affectedNumber'],
        text: "সর্বশেষ তথ্য অনুযায়ী বরিশাল জেলায় মোট আক্রান্ত " + data.barishal[3]['affectedNumber'] +" জন \n"+"   "+"এবং পুরো বরিশাল বিভাগে মোট আক্রান্ত হয়েছে "+data.barishalDivisionAffected +" জন",
        icon: "img/corona60.png"
        });
          }

          function Bhola() {
            swal({
          title: "ভোলা জেলা - "+data.barishal[4]['affectedNumber'],
          text: "সর্বশেষ তথ্য অনুযায়ী ভোলা জেলায় মোট আক্রান্ত " + data.barishal[4]['affectedNumber'] +" জন \n"+"   "+"এবং পুরো বরিশাল বিভাগে মোট আক্রান্ত হয়েছে "+data.barishalDivisionAffected +" জন",
          icon: "img/corona60.png"
          });
            }

            function Borguna() {
              swal({
            title: "বরগুনা জেলা - "+data.barishal[5]['affectedNumber'],
            text: "সর্বশেষ তথ্য অনুযায়ী বরগুনা জেলায় মোট আক্রান্ত " + data.barishal[5]['affectedNumber'] +" জন \n"+"   "+"এবং পুরো বরিশাল বিভাগে মোট আক্রান্ত হয়েছে "+data.barishalDivisionAffected +" জন",
            icon: "img/corona60.png"
            });
              }

//sylhet

  function Sylhet() {
    swal({
  title: "সিলেট জেলা - "+data.sylhet[0]['affectedNumber'],
  text: "সর্বশেষ তথ্য অনুযায়ী সিলেট জেলায় মোট আক্রান্ত " + data.sylhet[0]['affectedNumber'] +" জন \n"+"   "+"এবং পুরো সিলেট বিভাগে মোট আক্রান্ত হয়েছে "+data.sylhetDivisionAffected +" জন",
  icon: "img/corona60.png"
  });
    }

    function Moulovibazar() {
      swal({
    title: "মৌলভীবাজার জেলা - "+data.sylhet[1]['affectedNumber'],
    text: "সর্বশেষ তথ্য অনুযায়ী মৌলভীবাজার জেলায় মোট আক্রান্ত " + data.sylhet[1]['affectedNumber'] +" জন \n"+"   "+"এবং পুরো সিলেট বিভাগে মোট আক্রান্ত হয়েছে "+data.sylhetDivisionAffected +" জন",
    icon: "img/corona60.png"
    });
      }

      function Habiganj() {
        swal({
      title: "হবিগঞ্জ জেলা - "+data.sylhet[2]['affectedNumber'],
      text: "সর্বশেষ তথ্য অনুযায়ী হবিগঞ্জ জেলায় মোট আক্রান্ত " + data.sylhet[2]['affectedNumber'] +" জন \n"+"   "+"এবং পুরো সিলেট বিভাগে মোট আক্রান্ত হয়েছে "+data.sylhetDivisionAffected +" জন",
      icon: "img/corona60.png"
      });
        }

        function Sunamganj() {
          swal({
        title: "সুনামগঞ্জ জেলা - "+data.sylhet[3]['affectedNumber'],
        text: "সর্বশেষ তথ্য অনুযায়ী সুনামগঞ্জ জেলায় মোট আক্রান্ত " + data.sylhet[3]['affectedNumber'] +" জন \n"+"   "+"এবং পুরো সিলেট বিভাগে মোট আক্রান্ত হয়েছে "+data.sylhetDivisionAffected +" জন",
        icon: "img/corona60.png"
        });
          }

//rangpur

          function Panchagar() {
            swal({
          title: "পঞ্চগড় জেলা - "+data.rangpur[0]['affectedNumber'],
          text: "সর্বশেষ তথ্য অনুযায়ী পঞ্চগড় জেলায় মোট আক্রান্ত " + data.rangpur[0]['affectedNumber'] +" জন \n"+"   "+"এবং পুরো রংপুর বিভাগে মোট আক্রান্ত হয়েছে "+data.rangpurDivisionAffected +" জন",
          icon: "img/corona60.png"
          });
            }

            function Dinajpur() {
              swal({
            title: "দিনাজপুর জেলা - "+data.rangpur[1]['affectedNumber'],
            text: "সর্বশেষ তথ্য অনুযায়ী দিনাজপুর জেলায় মোট আক্রান্ত " + data.rangpur[1]['affectedNumber'] +" জন \n"+"   "+"এবং পুরো রংপুর বিভাগে মোট আক্রান্ত হয়েছে "+data.rangpurDivisionAffected +" জন",
            icon: "img/corona60.png"
            });
              }

              function Lalmonirhut() {
                swal({
              title: "লালমনিরহাট জেলা - "+data.rangpur[2]['affectedNumber'],
              text: "সর্বশেষ তথ্য অনুযায়ী লালমনিরহাট জেলায় মোট আক্রান্ত " + data.rangpur[2]['affectedNumber'] +" জন \n"+"   "+"এবং পুরো রংপুর বিভাগে মোট আক্রান্ত হয়েছে "+data.rangpurDivisionAffected +" জন",
              icon: "img/corona60.png"
              });
                }
                function Nilphamari() {
                  swal({
                title: "নীলফামারী জেলা - "+data.rangpur[3]['affectedNumber'],
                text: "সর্বশেষ তথ্য অনুযায়ী নীলফামারী জেলায় মোট আক্রান্ত " + data.rangpur[3]['affectedNumber'] +" জন \n"+"   "+"এবং পুরো রংপুর বিভাগে মোট আক্রান্ত হয়েছে "+data.rangpurDivisionAffected +" জন",
                icon: "img/corona60.png"
                });
                  }

                  function Gaibandha() {
                    swal({
                  title: "গাইবান্ধা জেলা - "+data.rangpur[4]['affectedNumber'],
                  text: "সর্বশেষ তথ্য অনুযায়ী গাইবান্ধা জেলায় মোট আক্রান্ত " + data.rangpur[4]['affectedNumber'] +" জন \n"+"   "+"এবং পুরো রংপুর বিভাগে মোট আক্রান্ত হয়েছে "+data.rangpurDivisionAffected +" জন",
                  icon: "img/corona60.png"
                  });
                    }

                    function Thakurgao() {
                      swal({
                    title: "ঠাকুরগাঁও জেলা - "+data.rangpur[5]['affectedNumber'],
                    text: "সর্বশেষ তথ্য অনুযায়ী ঠাকুরগাঁও জেলায় মোট আক্রান্ত " + data.rangpur[5]['affectedNumber'] +" জন \n"+"   "+"এবং পুরো রংপুর বিভাগে মোট আক্রান্ত হয়েছে "+data.rangpurDivisionAffected +" জন",
                    icon: "img/corona60.png"
                    });
                      }
                      function Rangpur() {
                        swal({
                      title: "রংপুর জেলা - "+data.rangpur[6]['affectedNumber'],
                      text: "সর্বশেষ তথ্য অনুযায়ী রংপুর জেলায় মোট আক্রান্ত " + data.rangpur[6]['affectedNumber'] +" জন \n"+"   "+"এবং পুরো রংপুর বিভাগে মোট আক্রান্ত হয়েছে "+data.rangpurDivisionAffected +" জন",
                      icon: "img/corona60.png"
                      });
                        }

                        function Kurigram() {
                          swal({
                        title: "কুড়িগ্রাম জেলা - "+data.rangpur[7]['affectedNumber'],
                        text: "সর্বশেষ তথ্য অনুযায়ী কুড়িগ্রাম জেলায় মোট আক্রান্ত " + data.rangpur[7]['affectedNumber'] +" জন \n"+"   "+"এবং পুরো রংপুর বিভাগে মোট আক্রান্ত হয়েছে "+data.rangpurDivisionAffected +" জন",
                        icon: "img/corona60.png"
                        });
                          }



//maymansungh

  function Sherpur() {
    swal({
  title: "শেরপুর জেলা - "+data.mymansingh[0]['affectedNumber'],
  text: "সর্বশেষ তথ্য অনুযায়ী শেরপুর জেলায় মোট আক্রান্ত " + data.mymansingh[0]['affectedNumber'] +" জন \n"+"   "+"এবং পুরো ময়মনসিংহ বিভাগে মোট আক্রান্ত হয়েছে "+data.mymansinghDivisionAffected +" জন",
  icon: "img/corona60.png"
  });
    }

    function Mymensingh() {
      swal({
    title: "ময়মনসিংহ জেলা - "+data.mymansingh[1]['affectedNumber'],
    text: "সর্বশেষ তথ্য অনুযায়ী ময়মনসিংহ জেলায় মোট আক্রান্ত " + data.mymansingh[1]['affectedNumber'] +" জন \n"+"   "+"এবং পুরো ময়মনসিংহ বিভাগে মোট আক্রান্ত হয়েছে "+data.mymansinghDivisionAffected +" জন",
    icon: "img/corona60.png"
    });
      }

      function Jamalpur() {
        swal({
      title: "জামালপুর জেলা - "+data.mymansingh[2]['affectedNumber'],
      text: "সর্বশেষ তথ্য অনুযায়ী জামালপুর জেলায় মোট আক্রান্ত " + data.mymansingh[2]['affectedNumber'] +" জন \n"+"   "+"এবং পুরো ময়মনসিংহ বিভাগে মোট আক্রান্ত হয়েছে "+data.mymansinghDivisionAffected +" জন",
      icon: "img/corona60.png"
      });
        }

        function Netrokona() {
          swal({
        title: "নেত্রকোনা  জেলা - "+data.mymansingh[3]['affectedNumber'],
        text: "সর্বশেষ তথ্য অনুযায়ী নেত্রকোনা  জেলায় মোট আক্রান্ত " + data.mymansingh[3]['affectedNumber'] +" জন \n"+"   "+"এবং পুরো ময়মনসিংহ বিভাগে মোট আক্রান্ত হয়েছে "+data.mymansinghDivisionAffected +" জন",
        icon: "img/corona60.png"
        });
          }
