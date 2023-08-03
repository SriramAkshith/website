//Detecting Button Press

var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}

//Detecting Keyboard Press

document.addEventListener("keypress", function(event) {

  makeSound(event.key);
  
  buttonAnimation(event.key);

})


function makeSound(key) {

  switch (key) {
    case "w":
      var audio = new Audio('sounds/car closing window.wav');
      audio.play();
      break;

    case "a":
      var audio = new Audio('sounds/car doorclose.wav');
      audio.play();
      break;

    case "s":
      var audio = new Audio('sounds/car doublehorn.wav');
      audio.play();
      break;

    case "d":
      var audio = new Audio('sounds/car window breaking.wav');
      audio.play();
      break;

    case "j":
      var audio = new Audio('sounds/engine motor.wav');
      audio.play();
      break;

    case "k":
      var audio = new Audio('sounds/Exhaust Sound.mp3');
      audio.play();
      break;

    case "l":
      var audio = new Audio('sounds/toycar crash.wav');
      audio.play();
      break;

    default:
      console.log(buttonInnerHTML);
  }
}

function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}
