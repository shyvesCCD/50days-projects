function showInputResult() {
  const inputResult = document.getElementById("myBorder");

  const inputBoder = inputResult.value;
  console.log(inputBoder);

  const blocoElement = document.getElementById("bloco");

  blocoElement.setAttribute("style", `border-radius: ${inputBoder}px`);
}
