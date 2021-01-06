function showResult() {
  const inputResult = document.getElementById("inputResult");

  const inputArray = inputResult.value.split("");
  inputArray.reverse();

  let valorFinal = 0;

  if (inputArray.some((valor) => Number(valor) != 1 && Number(valor) != 0)) {
    alert("Insira um numero na base binaria");
    location.reload();
  } else {
    for (let i = 0; i < inputArray.length; i++) {
      let valorNum = Number(inputArray[i]);

      let bin = 2 ** i;
      let dec = valorNum * bin;
      valorFinal = dec + valorFinal;
      console.log(valorFinal);
      showResult2(valorFinal);
      setInterval(() => {
        location.reload();
      }, 10000);
    }
  }

  function showResult2(valor) {
    const resultado = document.querySelector("#resultado");
    resultado.innerHTML = valor;
  }
}
