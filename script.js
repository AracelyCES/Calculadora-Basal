/*let button = document.getElementById ('calculadora');
    console.log (button);
    button.addEventListener("click", calcular)
  
        function calcular () {
            const input =document.getElementById ("peso");
            const PESO = input.value;
        
       if (PESO <= 30) {
        console.log(hollidaySegar (PESO));
       }
        else{
            console.log(superficieCorporal(PESO));
        }
    }


    function hollidaySegar (peso){
            return "holliday";
     
    }

    function superficieCorporal (peso){
        let s = parseInt (peso)
        console.log (s+90)
        s= ((s*4)+7)/ (s+90)
        console.log (s)
        return "superficie";
    }*/
    
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
            let flujo = calcFlujo(DATO);
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
    })
    function calcFlujo(peso){
        let resto = peso;
        let flujo = 0;
        if (resto>20){
            let aux = resto-20;
            flujo += aux*1;
            resto -= aux;
        } 
        if (resto>10){
            let aux = resto-10;
            flujo += aux*2;
            resto -= aux;
        }
        flujo += resto*4;
        return flujo;
    }
    
    function superficieCorporal (peso){
        let s = parseInt (peso)
        console.log (s+90)
        s= ((peso*4)+7)/ (s+90)
        console.log (s)
        return "superficie";
    }
