var generadorDeDominios = document.querySelector('.generadorDeDominios');
var inicio      = ["your","the"];
var medio       = ["best", "great", "big"];
var final       = ["website", "trunkofinformation", "site", "evrythinguneed"];
var terminacion = [".es", ".org", ".lat", ".com", ".web", ".eu", ".online"];



function dominion(){
	var result = "<a href=google.com>" + "Hola.com" + "</a>" + "<br>";
	for(var t = 0; t<inicio.length; t++){	
		for(var k = 0; k<medio.length;k++){     
			for(var i = 0; i<final.length; i++){
				for(var r = 0; r<terminacion.length; r++){
					var auxDominio = inicio[t]+medio[k]+final[i]+terminacion[r];
					result= result + "<a href=https://www.instagram.com/4lex_2099?igsh=MTJwbmJuMTVtM2NvNQ==>" + auxDominio + "</a>" +"<br>";

				}
			}
		}
	}

	return result;
}


/** Interpreta el texto de la funcion para que se aplique la etiqueta de <br> y lo a;ade directamente al html**/
if (generadorDeDominios) {
    generadorDeDominios.innerHTML = dominion(); 
}





