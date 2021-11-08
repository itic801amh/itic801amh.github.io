"use strict";
BigNumber.config({DECIMAL_PLACES: 2, ROUNDING_MODE: BigNumber.ROUND_HALF_UP});
var FMT_ENTERO = "0,0",
    FMT_NUMERO = "0,.00",
    FMT_MONEDA = "$0,0.00",
    FMT_PORCENTAJE = "0.00%",
    forma = document.getElementById("forma"),
    salidaSuma = document.getElementById("salidaSuma"),
    salidaResta = document.getElementById("salidaResta"),
    salidaMultiplicacion = document.getElementById("salidaMultiplicacion"),
    salidaDivision= document.getElementById("salidaDivision");
forma.addEventListener("submit", procesa, false);
forma["limpiar"].addEventListener("click", limpiar, false);
Node.prototype.info = function(mensaje){
 this.className="";
 this.textContent=mensaje;
};   
Node.prototype.error = function(mensaje){
 this.className="error";
 this.textContent=mensaje;
};   
function procesa(){
  
    var numero1 = forma["numero1"].valueAsNumber,
        numero2 = forma["numero2"].valueAsNumber,error = false;

 if (numero2===0){
    error=true;
    salidaDivision.error("División Error ( / )");
    var total = new BigNumber(numero1).times(new BigNumber(2)),
        resultado1 = numero1+numero2,
        numeroEnTexto =numeral(numero1).format(FMT_NUMERO);
        numeroEnTexto = numeral(numero2).format(FMT_NUMERO);
        
        salidaSuma.info("Suma: " + numeral(resultado1).format(FMT_MONEDA)+"(+)");
        
 var total3 = new BigNumber(numero1).times(new BigNumber(2)),
        resultado3 = numero1-numero2,
        numeroEnTexto =numeral(numero1).format(FMT_NUMERO);
        numeroEnTexto = numeral(numero2).format(FMT_NUMERO);
        salidaResta.info("Resta: " + numeral(resultado3).format(FMT_MONEDA)+"(-)");
        
 var total4 = new BigNumber(numero1).times(new BigNumber(2)),
        resultado4 = numero1*numero2,
        numeroEnTexto =numeral(numero1).format(FMT_NUMERO);
        numeroEnTexto = numeral(numero2).format(FMT_NUMERO);
        salidaMultiplicacion.info("Multiplicación: " + numeral(resultado4).format(FMT_MONEDA)+"( * )");
  }
    
 else if (!error) {
     
var total = new BigNumber(numero1).times(new BigNumber(2)),
        resultado1 = numero1+numero2,
        numeroEnTexto =numeral(numero1).format(FMT_NUMERO);
        numeroEnTexto = numeral(numero2).format(FMT_NUMERO);
        
        salidaSuma.info("Suma: " + numeral(resultado1).format(FMT_MONEDA)+"(+)");
        
   var total2 = new BigNumber(numero1).times(new BigNumber(2)),
        resultado = numero1/numero2,
        numeroEnTexto =numeral(numero1).format(FMT_NUMERO);
        numeroEnTexto = numeral(numero2).format(FMT_NUMERO);
        
        salidaDivision.info("División: " + numeral(resultado).format(FMT_MONEDA)+"(/)"); 
        
 var total3 = new BigNumber(numero1).times(new BigNumber(2)),
        resultado3 = numero1-numero2,
        numeroEnTexto =numeral(numero1).format(FMT_NUMERO);
        numeroEnTexto = numeral(numero2).format(FMT_NUMERO);
        salidaResta.info("Resta: " + numeral(resultado3).format(FMT_MONEDA)+"(-)");
        
 var total4 = new BigNumber(numero1).times(new BigNumber(2)),
        resultado4 = numero1*numero2,
        numeroEnTexto =numeral(numero1).format(FMT_NUMERO);
        numeroEnTexto = numeral(numero2).format(FMT_NUMERO);
        salidaMultiplicacion.info("Multiplicación: " + numeral(resultado4).format(FMT_MONEDA)+"( * )");
  }
    

 
  }


function limpiar(){
  forma["numero1"].value="";
  forma["numero2"].value="";
  forma["salidaSuma"].value="";
  forma["salidaResta"].value="";
  forma["salidaMultiplicacion"].value="";
  forma["salidaDivision"].value="";
  
 
}
