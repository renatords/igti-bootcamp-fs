window.addEventListener("load", start);
var inputR = null;
var inputG = null;
var inputB = null;

function start() {
  
  //Armazena os inputs com os valores de exibição do range para evitar percorrer o DOM toda hora
  function getInputsRGB() {
    inputR = document.querySelector("#rLabel");
    inputG = document.querySelector("#gLabel");
    inputB = document.querySelector("#bLabel");
  }
  getInputsRGB();
  //Modifica a cor da div da cor
  changeDivCollor();

  //Seta os evento para "escutar" a alteração do range
  var r = document.querySelector("#r");
  r.addEventListener("change", setInputRangeNumber);
  var g = document.querySelector("#g");
  g.addEventListener("change", setInputRangeNumber);
  var b = document.querySelector("#b");
  b.addEventListener("change", setInputRangeNumber);
}

//Seta nos inputs o valor do range
function setInputRangeNumber(event) {
  
  switch (event.target.id) {
    case "r":
      inputR.value = event.target.value;
      break;
    case "g":
      inputG.value = event.target.value;
      break;
    case "b":
      inputB.value = event.target.value;
      break;
    default:
      console.log("Erro");
      break;
  }
  changeDivCollor();
}

function changeDivCollor() {
  function rgb(r, g, b){
    return ["rgb(",r,",",g,",",b,")"].join("");
  }
  var divColor = document.querySelector("#rectangle");
  divColor.style.backgroundColor =  rgb(Number(inputR.value), Number(inputG.value), Number(inputB.value));
}
