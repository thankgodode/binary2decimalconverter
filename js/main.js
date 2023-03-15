const input = document.getElementById("binary");
const container = document.querySelector(".container");
const btn = document.querySelector("button");

let arr = "1";

function binaryToDecimal(num) {
  let empty = [];
  let binary = 0;
  let splitN = num.split("");
  let reversed = splitN.reverse();

  for (let i = 0; i < reversed.length; i++) binary += reversed[i] * 2 ** i;
  return binary;
}

function displayBinaryNum() {
  container.innerHTML = binaryToDecimal(input.value);
}

btn.addEventListener("click", function () {
  console.log(true);
  let text = /[a-zA-Z2-9]/.test(input.value);
  if (text) {
    return (container.innerHTML = `<p style="color:rgb(255, 116, 116); style="font-size:0.8rem">Please enter a valid binary number</p>`);
  } else if (input.value == "") {
    return (container.innerHTML = `<p style="color:rgb(255, 116, 116);" style="font-size:0.8rem">Please enter a number between 0s and 1s</p>`);
  } else {
    return (container.innerHTML = `<p style="font-size:1.1rem">${binaryToDecimal(
      input.value
    )}<sub>10</sub></p>`);
  }
});
