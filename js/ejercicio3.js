
let resultado=document.getElementById('resultado')

function mostrarNombreEdad(){
    let nombre=document.getElementById('Nombre').value
    let edad=document.getElementById('Edad').value

    edad=parseInt(edad)

    if (edad>=18){
        resultado.innerHTML=`El nombre es ${nombre} y la edad es ${edad}`
        
    }
    
    



}

function mostrarNombreEdad(){
    let nombre=document.getElementById('Nombre').value
    let edad=document.getElementById('Edad').value

    edad=parseInt(edad)

    if (edad>=18){

        resultado.innerHTML="Eres mayor de edad"

    }
    else{
        resultado.innerHTML="Eres menor de edad, no puedes usar esta app"
    }
}




function verificarSexoEdad(){
    let edad=document.getElementById('Edad').value
    let nombre=document.getElementById('Nombre').value
    let sexo=document.getElementById('Sexo').value

    if(sexo==1 && edad>=18){
        return resultado.innerHTML=`${nombre} tiene ${edad} años y es mayor de edad`

    }
    
}

function MostrarNumero(){
    let numero=document.getElementById('numero').value

    numero=parseFloat(numero)
    
    
    
    if(numero>=0){
        return resultado.innerHTML=`el numero ingresado es ${numero} y su valor absoluto es ${numero}`
    }
    else{
        return resultado.innerHTML=`El numero ingresado es ${numero} y su valor absoluto es ${-numero}`
    }
}

function CalcularRaiz(){
    let numero=document.getElementById('numero').value
    
    numero=parseFloat(numero)
    
    let raizCuadrada
    
    if (numero>=0){
        raizCuadrada=Math.sqrt(numero)
        
        return resultado.innerHTML=`La raiz del numero ${numero} es ${raizCuadrada}`
    }
    else{
        return resultado.innerHTML='el numero ingresado tiene una raiz imaginaria'
    }
}

function MostrarPositivos(){
    let numero1=document.getElementById('numero1').value
    
    numero1=parseFloat(numero1)
    
    let numero2=document.getElementById('numero2').value
    
    numero2=parseFloat(numero2)

    if (numero1>=0 && numero2>=0){
        return resultado.innerHTML=`Los numeros positivos son ${numero1} y ${numero2}`
    } 
    else if (numero1>=0) {
        return resultado.innerHTML=`El numero positivo es ${numero1}`   
    } 
    else{
        return resultado.innerHTML=`El numero positivo es ${numero2}`
    } 
    

    
}
function MostrarSiAmbosPositivos(){
    let numero1=document.getElementById('numero1').value
    
    numero1=parseFloat(numero1)
    
    let numero2=document.getElementById('numero2').value
    
    numero2=parseFloat(numero2)

    if (numero1>=0 || numero2>=0){
        return resultado.innerHTML=`Los numeros son el ${numero1} y el ${numero2}`
    }
    

    
}
function MostrarSiNoSonCero(){
    let numero1=document.getElementById('numero1').value
    
    numero1=parseFloat(numero1)
    
    let numero2=document.getElementById('numero2').value
    
    numero2=parseFloat(numero2)

    if (numero1*numero2!=0){
        return resultado.innerHTML=`los numeros ${numero1} y ${numero2} son distintos a cero`
    }
    

    
}
function MostrarSuma(){
    let numero1=document.getElementById('numero1').value
    
    numero1=parseFloat(numero1)
    
    let numero2=document.getElementById('numero2').value
    
    numero2=parseFloat(numero2)

    let suma=numero1+numero2

    return resultado.innerHTML=`la suma de los numeros ${numero1} y ${numero2} es ${suma}`
    

    
}
function CalcularPorcentaje(){
    let numero1=document.getElementById('numero1').value
    
    numero1=parseFloat(numero1)
    
    let porcentaje=numero1*0.05
    
    return resultado.innerHTML=`El 5% del numero ${numero1} es: ${porcentaje}`

    

    
    

    
}