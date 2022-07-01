speaks = [
  {
    name: "Alex", // 0
    lang: "en-US",
  },
  {
    name: "Alice", // 1
    lang: "it-IT",
  },
  {
    name: "Alva", // 2
    lang: "sv-SE",
  },
  {
    name: "Amelie", // 3
    lang: "fr-CA",
  },
  {
    name: "Anna", // 4
    lang: "de-DE",
  },
  {
    name: "Carmit", // 5
    lang: "he-IL",
  },
  {
    name: "Damayanti", // 6
    lang: "id-ID",
  },
  {
    name: "Daniel", // 7
    lang: "en-GB",
  },
  {
    name: "Diego", // 8
    lang: "es-AR",
  },
  {
    name: "Ellen", // 9
    lang: "nl-BE",
  },
  {
    name: "Fiona", // 10
    lang: "en",
  },
  {
    name: "Fred", // 11
    lang: "en-US",
  },
  {
    name: "Ioana", // 12
    lang: "ro-RO",
  },
  {
    name: "Joana", // 13
    lang: "pt-PT",
  },
  {
    name: "Jorge", // 14
    lang: "es-ES",
  },
  {
    name: "Juan", // 15
    lang: "es-MX",
  },
  {
    name: "Kanya", // 16
    lang: "th-TH",
  },
  {
    name: "Karen", // 17
    lang: "en-AU",
  },
  {
    name: "Kyoko", // 19
    lang: "ja-JP",
  },
  {
    name: "Laura", // 20
    lang: "sk-SK",
  },
  {
    name: "Lekha", // 21
    lang: "hi-IN",
  },
  {
    name: "Luca", // 22
    lang: "it-IT",
  },
  {
    name: "Luciana", // 23
    lang: "pt-BR",
  },
  {
    name: "Maged", // 24
    lang: "ar-SA",
  },
  {
    name: "Mariska", // 25
    lang: "hu-HU",
  },
  {
    name: "Mei-Jia", // 26
    lang: "zh-TW",
  },
  {
    name: "Melina", // 27
    lang: "el-GR",
  },
  {
    name: "Milena", // 28
    lang: "ru-RU",
  },
  {
    name: "Moira", // 29
    lang: "en-IE",
  },
  {
    name: "Monica", // 30
    lang: "es-ES",
  },
  {
    name: "Nora", // 31
    lang: "nb-NO",
  },
  {
    name: "Paulina", // 32
    lang: "es-MX",
  },
  {
    name: "Samantha", // 33
    lang: "en-US",
  },
  {
    name: "Sara", // 34
    lang: "da-DK",
  },
  {
    name: "Satu", // 35
    lang: "fi-FI",
  },
  {
    name: "Sin-ji", // 36
    lang: "zh-HK",
  },
  {
    name: "Tessa", // 37
    lang: "en-ZA",
  },
  {
    name: "Thomas", // 38
    lang: "fr-FR",
  },
  {
    name: "Ting-Ting", // 39
    lang: "zh-CN",
  },
  {
    name: "Veena", // 40
    lang: "en-IN",
  },
  {
    name: "Victoria", // 41
    lang: "en-US",
  },
  {
    name: "Xander", // 42
    lang: "nl-NL",
  },
  {
    name: "Yelda", // 43
    lang: "tr-TR",
  },
  {
    name: "Yuna", // 44
    lang: "ko-KR",
  },
  {
    name: "Yuri", // 45
    lang: "ru-RU",
  },
  {
    name: "Zosia", // 46
    lang: "pl-PL",
  },
  {
    name: "Zuzana", // 47
    lang: "cs-CZ",
  },
];

const titulo = document.querySelector(".title-1");
const searchbox = document.querySelector("#linha");
const toque = document.querySelector("#toque");
const msg = new SpeechSynthesisUtterance();
var boasVindas = 1;
msg.volume = 1; // 0 to 1
msg.rate = 2; // 0.1 to 10
msg.pitch = 1.5; // 0 to 2

const voice = speaks[22]; //47
console.log(`Voice: ${voice.name} and Lang: ${voice.lang}`);
msg.voiceURI = voice.name;
msg.lang = voice.lang;

function ativar() {
  if(boasVindas){
    msg.text = "Bem-vindo ao Docs Coletivo, clique na tela para continuar.";
    speechSynthesis.speak(msg);
    boasVindas = 0;
  }
  
}

searchbox.addEventListener("input", ()=>{
  msg.text = searchbox.value;
  speechSynthesis.speak(msg);
  console.log('aaaaaa')
})


titulo.onclick = ativar;

/* API do onibus */

function fazGet(url) {
  let request = new XMLHttpRequest();
  request.open("GET", url, false);
  request.send();
  return request.responseText;
}

function main(linhaOnibus) {
  var data = fazGet(
    `https://dadosabertos.rio.rj.gov.br/apiTransporte/apresentacao/rest/index.cfm/obterPosicoesDaLinha/${linhaOnibus}`
  );

  infoBus = JSON.parse(data);
  if (infoBus.DATA.length > 0) {
    updateLocal(infoBus);
  } else {
    document.querySelectorAll(
      "p"
    )[2].innerHTML = `Seu ônibus não foi encontrado. Verifique sua linha!`;
    msg.text = document.querySelectorAll("p")[2].innerHTML.value;
    speechSynthesis.speak(msg);
  }
  console.log(infoBus.DATA.length);
}

/* API da geolocalização */

if ("geolocation" in navigator) {
  /* geolocation is available */
} else {
  alert(
    "I'm sorry, but geolocation services are not supported by your browser."
  );
}

function updateLocal(newData) {
  navigator.geolocation.getCurrentPosition(function (position) {
    var distancia = getDistanceFromLatLonInKm(
      { lat: position.coords.latitude, lng: position.coords.longitude },
      { lat: newData["DATA"][0][3], lng: newData["DATA"][0][4] }
    );
    document.querySelectorAll(
      "p"
    )[2].innerHTML = `Seu ônibus mais próximo esta em a ${distancia} metros de você`;
    msg.text = document.querySelectorAll("p")[2].innerHTML;
    speechSynthesis.speak(msg);
    console.log(distancia);
  });
}

let botao = document.querySelector("button#pesquisa");

function linhaDoOnibus() {
  let linhaOnibus = document.querySelector("input#linha");
  let resp = document.querySelector(".inicio-2");
  console.log(linhaOnibus.value);
  resp.innerHTML = `Seu ônibus é ${linhaOnibus.value}`;
  msg.text=resp.innerHTML;
  speechSynthesis.speak(msg);
  main(linhaOnibus.value);
}

botao.addEventListener("click", linhaDoOnibus);

//convertendo pra metros

function getDistanceFromLatLonInKm(position1, position2) {
  "use strict";
  var deg2rad = function (deg) {
      return deg * (Math.PI / 180);
    },
    R = 6371,
    dLat = deg2rad(position2.lat - position1.lat),
    dLng = deg2rad(position2.lng - position1.lng),
    a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(position1.lat)) *
        Math.cos(deg2rad(position1.lat)) *
        Math.sin(dLng / 2) *
        Math.sin(dLng / 2),
    c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return (R * c * 1000).toFixed();
}
