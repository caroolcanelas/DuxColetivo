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

teste = document.querySelector(".title-1");
console.log(teste);
const msg = new SpeechSynthesisUtterance();
msg.volume = 1; // 0 to 1
msg.rate = 1; // 0.1 to 10
msg.pitch = 1.5; // 0 to 2
msg.text = "Talking Bus.";

const voice = speaks[23]; //47
console.log(`Voice: ${voice.name} and Lang: ${voice.lang}`);
msg.voiceURI = voice.name;
msg.lang = voice.lang;

function ativar() {
  speechSynthesis.speak(msg);
}

teste.onmousedown = ativar;
/* Tentativa 1 
const url =
  "https://dadosabertos.rio.rj.gov.br/apiTransporte/apresentacao/rest/index.cfm/obterPosicoesDaLinha/107";
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    //Aqui iremos trabalhar com o JSON
    Array.from(data).forEach((linha) => {
      // Log de cada código de ônibus
      console.log(linha.ordem);
    });
  })
  .catch((err) => {
    //Fazer algo com os erros aqui
    console.log(err);
  });*/

function fazGet(url) {
  let request = new XMLHttpRequest();
  request.open("GET", url, false);
  request.send();
  return request.responseText;
}

function main() {
  data = fazGet(
    "https://dadosabertos.rio.rj.gov.br/apiTransporte/apresentacao/rest/index.cfm/obterPosicoesDaLinha/107"
  );
  infoBus = JSON.parse(data);
  console.log(infoBus);
}
main();
