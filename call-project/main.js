const audio = new Audio();
audio.src = "./assets/110.mp3";

// ELEMENTS
const firstInput = document.querySelector("#first-input");
const secondInput = document.querySelector("#second-input");
const form = document.querySelector("form");
const waitingText = document.querySelector(".waiting-text");

// EVENT LISTENER
form.addEventListener("submit", (e) => {
  e.preventDefault();

  // CHECK IF INPUTS WAS FULL
  if (firstInput.value !== "" && secondInput.value !== "") {
    waitingText.innerHTML = `در حال برقراری تماس از ${firstInput.value} با ${secondInput.value} 
    <img src='./assets/loading.gif' alt='loading'/>`;

    // PLAY AUDIO AFTER 3 SECONDS DELAY
    setTimeout(() => {
      audio.play();
      waitingText.innerHTML =
        "";
    }, 3000);
  } else {
    alert("فرم رو پر کن عشقم :)");
  }
});

// Instagram => Soufi_learn
// Telegram => Soufi_learn

// میدونم جوری ضد حال خوردی که میخای فوشم بدی و بلاکم کنی
//  ولی شایسته ترین شما نزد پروردگار، صبور ترین شماست :)
