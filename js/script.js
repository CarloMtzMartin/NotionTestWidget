let d = new Date();
//document.body.innerHTML = "<h1>Today's date is " + d + "</h1>"
quesito();

function quesito() {
  fetch("https://foaas.com/awesome/carlo")
  .then(response => {
    //document.body.innerHTML = "<h1>"+ response.json() + "</h1>";
    return reponse.json();
  }).then(x => {
    console.log({x});
    document.body.innerHTML = "<h1>"+ x + "</h1>";
  });
}
