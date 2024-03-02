
let form = document.getElementById('calculadora');

const CALCULAR = document.getElementById('calcular');
const ERROR = document.getElementById('error');
const FLU = document.getElementById('flu');
const MAN = document.getElementById('man');

CALCULAR.addEventListener('click', () => {
    const DATO = document.getElementById('peso').value
    //validamos que se cargue un dato:
    if (DATO > 0){
        ERROR.style.display = 'none'
        let flujo = holliday(DATO);
        let mantenimiento = flujo*1.5;
        FLU.innerHTML = flujo + ' cc/hr';
        MAN.innerHTML = 'm+m/2 ' + mantenimiento + ' cc/hr';
        FLU.style.display = 'block';
        MAN.style.display = 'block';
    } else {
        ERROR.style.display = 'block';
        FLU.style.display = 'none';
        MAN.style.display = 'none';
    }
    
    if (DATO>30){
        let resultado =superficie(DATO)
        console.log ("1500:", resultado [0]);
        console.log ("2000:", resultado [1]);
        
    
    }else {
        let resultado = holliday(DATO)
        console.log ("volumen:", resultado[0]);
        console.log ("flujo hora:", resultado[1]);
        console.log ("m+m/2:", resultado[2]);
    }
} )


function superficie(peso){
    let superficie =(peso*4 +7) /(peso+90)
    return [Math.floor (superficie*1500), Math.floor (superficie*200)]
}


function holliday(peso){
    let resto = peso;
    let flujo = 0;
    if (resto>20){
        let aux = resto-20;
        flujo += aux*20;
        resto -= aux;
    } 
    if (resto>10){
        let aux = resto-10;
        flujo += aux* 50;
        resto -= aux;
    }
    flujo += resto*100;
    let mantenimiento = flujo / 24;
    let mantenimientoYMedio = (flujo / 24)* 1.5; 
    return [flujo, Math.floor(mantenimiento), Math.floor (mantenimientoYMedio)];
    
}



 
    

   