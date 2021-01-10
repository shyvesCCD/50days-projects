function showPomodoro() {
  do {
    let min = 24;
    let sec = 50;
    if ((sec = 0)) {
      min--;
      sec = 59;
    } else {
      sec--;
    }
    document.getElementById("clock").innerHTML = min + " : " + sec;
  } while (min != 0);
}

// function showResult2(valor) {
//   const resultado = document.querySelector("#resultado");
//   resultado.innerHTML = valor;
// }
