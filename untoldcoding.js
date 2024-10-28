const text =
  "Ik I didn't say much Yesterday because I didn't know how to express the emotions which was going inside. Although I made it evident enough at the end 👀 and that kiss was a promise to never take you for granted !!! The feeling was obviously different as u already know it was first time for me too.I love you as you are and I don't want you to change for anyone....anyways I won't let you change till the time I am around and that it for sure.....Be cringe with me......Always text me, call me anytime....annoy me....Send me selfies, your photos ....Tell me about how your day was...I love that and ....Thank youuuuuuuuuu for the gift and knowing me I am going to cherish that forever.              PS : Chose the song because its one my father's favourite";
const paragraph = text.split("");

let i = 0;

function dashOut(arr) {
  if (i < arr.length) {
    console.log(arr[i]);
    document.querySelector(".textCont").textContent += arr[i];

    i++;
    console.log("The i count: " + i);
    setTimeout(function () {
      dashOut(arr);
    }, interval(arr[i]));
  }
}

function interval(letter) {
  console.log(letter);
  if (letter == ";" || letter == "." || letter == ",") {
    return Math.floor(Math.random() * 500 + 500);
  } else {
    return Math.floor(Math.random() * 130 + 5);
  }
}

function startFromBegin() {
  i = 0;
  dashOut(paragraph);
}

startFromBegin();
