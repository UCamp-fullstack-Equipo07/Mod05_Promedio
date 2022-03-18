function onClick($this){

    let arry=[1,2,3,4,5];
    let promedio=0;
    let validEntry=false;

    for (i=1;i<(arry.length+1);i++){
        arry[(i-1)]= Number(document.getElementById('cal_0'+i).value);
        promedio=promedio+arry[(i-1)]
    }

    if(!isNaN(arry[0])&&!isNaN(arry[1])&&!isNaN(arry[2])&&!isNaN(arry[3])&&!isNaN(arry[4])){

        if((promedio/5)>=70){
            document.getElementById('result').innerHTML='Aprobado: '+(promedio/5);
        }else{
            document.getElementById('result').innerHTML='Reprobado: '+(promedio/5)
        }
    }else{
        document.getElementById('result').innerHTML='Por favor revisa que todas las calificaciones sean números del 0 al 100.'
    }



}