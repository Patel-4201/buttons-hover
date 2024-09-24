const yesButton = document.getElementById('yes');
const noButton = document.getElementById('no');
const cta = document.querySelector('.buttons');

noButton.addEventListener('mouseover', () =>{
  const yesIndex = Array.from(cta.children).indexOf(yesButton);
    const noIndex = Array.from(cta.children).indexOf(noButton);

    if (yesIndex < noIndex) {
      cta.insertBefore(noButton, yesButton);
    } else {
      cta.insertBefore(yesButton, noButton);
    }
})

function yesfun(){
  alert("magic see the button ha ha ha")
}
function nofun(){
  alert("magic see the button ha ha ha ")
}