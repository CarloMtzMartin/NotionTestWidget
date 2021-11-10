let d = new Date();
document.body.innerHTML = "<h1>Today's date is " + d + "</h1>"
quesito();

function quesito() {
  fetch("https://foaas.com/awesome/carlo")
  .then(response => {
    return reponse.json();
  });
}
