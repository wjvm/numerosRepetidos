var vector = [1,2,4,6,1,5];
var numeroRepetido = false;

for (var i = 0; i < vector.length; i++){

    var numeroActual = vector[i];

    for(var j = i + 1; j < vector.length; j++){

        if (numeroActual === vector[j]){

            numeroRepetido = true;
                        
        }
    }
}

if (numeroRepetido){

    console.log(`Sim há numero repetido`);
} else {

    console.log(`Não há numero repetido`);
}