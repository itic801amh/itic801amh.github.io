"use strict";
var forma = document.getElementById ("forma"),
     resultado = document.getElementById("resultado");
forma.addEventListener("submit",procesa,false);

function procesa(){
    var base =parseInt( forma["base"].value);
    var res="";
    for (var i = 0; i <= 10; i++) {
         res=res+ base +"=" +i+ "="+potencia(base,i)+"\n";

    }
   forma["resultado"].value=res;
}

function potencia(valor1,valor2){
     const base = valor1;
          const exponente = valor2;
          let r = 1;
          let i = 0; 
          while(i < exponente){
              r = r * base;
              i++;
          }
          return (r);
}