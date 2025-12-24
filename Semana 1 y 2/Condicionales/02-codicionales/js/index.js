// Desempeño de nota
let nota = 0;

if(nota > 4.5){
    console.log(nota + " Tu nota es Superior")
}else{
    if(nota < 4.5 && nota > 3.9){
        console.log(nota + (" Tu nota es Alta"))
    }else{
        if(nota > 29){
            console.log(nota + " Tu nota es Regular")
        }else{
            console.log(nota +" Tu nota es mala, ni te la muestro")
        }
    }
}
