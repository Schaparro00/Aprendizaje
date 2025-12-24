const numeroUno = 1.0;
const numeroDos = 3.5;
const numeroTres = 4.4;

const suma = (numeroUno + numeroDos + numeroTres)/3

if(suma >= 4.6){
    console.log("Tu nota Promedio es: ",suma," Felicidades")
}else{
    if(suma >= 4.0){
        console.log("Tu nota Promedio es: ",suma," Muy bien")
    }else{
        if(suma >= 3.0){
            console.log("Tu nota Promedio es: ",suma," Pasate regular")
        }else{
            console.log("Tu nota Promedio es: ",suma," Perdiste el promedio")
        }
    }
}

console.log(suma)

