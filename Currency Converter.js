function ConvertCurrency(){
    var from = document.getElementById("currency-one").value;
    var to = document.getElementById("currency-two").value;
    var request = new XMLHttpRequest();
    request.open('GET','https://api.exchangeratesapi.io/latest?symbols='+ from +"," + to )
request.onload = function(){
     var JsResult = JSON.parse(request.responseText);
     //console.log(JsResult.rates[from]);
     //console.log(JsResult.rates[to]);
     var Unit = JsResult.rates[to]/JsResult.rates[from];
     //console.log(Unit);
     var amt = document.getElementById("amount-one").value;
     //console.log(amt);
     document.getElementById("amount-two").value = (amt*Unit).toFixed(2);
     var Calc = document.getElementById("Calc").innerHTML="1 " + from +" = "+ Unit.toFixed(5) + " " + to;
};
request.send();
}

function swap(){
    var txt1 = document.getElementById("currency-one");
    var txt2 = document.getElementById("currency-two");
    var temp = txt1.value;
    txt1.value = txt2.value;
    txt2.value = temp;

    ConvertCurrency();
}