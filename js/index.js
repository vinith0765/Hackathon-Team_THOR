let counts = setInterval(updated);
let upto = 0;
let contacts = 89;
let emailSend = 203;
function updated() {
  var count = document.getElementById("counter");
  count.innerHTML = `<h5>${++upto}</h5>`;
  if (upto === contacts) {
    clearInterval(counts);
  }
}
