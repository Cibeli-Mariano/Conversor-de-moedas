function Converter() {
    var valorElemento = document.getElementById("valor"); //Elemento no html e pegar o id "valor"//
    var valor = valorElemento.value;
    var valorEmDolarNumerico = parseFloat(valor); //Passa de texto para numero//
  
    var valorEmReal = valorEmDolarNumerico * 5;
    console.log(valorEmReal);
  
    var elementoValorConvertido = document.getElementById("valorConvertido"); //pegui do html//
    var valorConvertido = "O resultado em real é R$" + valorEmReal;
    elementoValorConvertido.innerHTML = valorConvertido; // quero colocar dentro desse eleemnto do html //
  }
  