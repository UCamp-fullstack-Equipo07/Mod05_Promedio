function onClick($this){

    let arry=[1,2,3,4,5];
    let promedio=0;

    for (i=1;i<(arry.length+1);i++){
        arry[(i-1)]= Number(document.getElementById('cal_0'+i).value);
        promedio=promedio+arry[(i-1)]
        //console.log(promedio);
    }

    if((promedio/5)>=70){
        document.getElementById('result').innerHTML='Aprobado: '+(promedio/5);
    }else{
        document.getElementById('result').innerHTML='Reprobado: '+(promedio/5)
    }

}