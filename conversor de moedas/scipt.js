function converter(){ 
    var valorDolar  = document.getElementById('dolar');
    var dolar = valorDolar.value;
    var valorEmDolar = parseFloat(dolar);
    var valorEmReal = document.querySelector('span'); 
    valorEmReal.innerHTML =  parseFloat(valorEmDolar * 4.77);
}
function converter1(){
    var valorEuro = document.getElementById('euro');
    var euro = valorEuro.value;
    var valorEmEuro = parseFloat(euro);
    var valorEmReal = document.querySelector('h5');
    valorEmReal.innerHTML = (valorEmEuro * 5.21);
}
function converter2(){
    var valorPeso = document.getElementById('peso');
    var peso = valorPeso.value;
    var valorEmPeso = parseFloat(peso);
    var valorEmReal = document.querySelector('h4');
    valorEmReal.innerHTML = (valorEmPeso * 0.25);
}