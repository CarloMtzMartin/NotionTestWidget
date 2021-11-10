let d = new Date();
//document.body.innerHTML = "<h1>Today's date is " + d + "</h1>"
quesito();

function quesito() {
  fetch("https://foaas.com/awesome/carlo" , {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    //mode: 'cors', // no-cors, *cors, same-origin
    //cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    //credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Accept': 'application/json'
    },
  })
  .then(response => {
    //document.body.innerHTML = "<h1>"+ response.json() + "</h1>";
    return response.json();
  }).then(x => {
    console.log({x});
    document.body.innerHTML = "<h1>"+ x.message + "</h1>";
  });
}
