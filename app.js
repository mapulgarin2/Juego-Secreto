let numeroSecreto = 0;
let contador = 0;
let listaNumerosGenerados = [];
let numeroMaximo = 10;

function asignarTexto(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML =texto;
    return;
}

function validarNumeroDeUsuario() {
    let numeroUsusario = parseInt(document.getElementById('valor_numero_usuario').value);
    // console.log(numeroUsusario);    
    // console.log(typeof(numeroUsusario))
    // console.log(numeroSecreto);
    // console.log(typeof(numeroSecreto));
    //console.log(numeroSecreto === numeroUsusario);
    if (numeroSecreto === numeroUsusario) {
        asignarTexto('p',`Acertaste el número secreto en ${contador} ${contador=== 1 ? 'vez':'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if (numeroUsusario < numeroSecreto){
            asignarTexto('p','El número secreto es mayor');
        }else{
            asignarTexto('p','El número Secreto es menor');
        }
        contador++;
        limpiarValor();
    }
    return;
}

function limpiarValor(){
    return document.querySelector('#valor_numero_usuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1; 
    console.log(numeroGenerado);
    console.log(listaNumerosGenerados);  
    if (listaNumerosGenerados.length == numeroMaximo) {
        asignarTexto('p','Se sortearon todos los numeros posibles'); 
    }else{

        if(listaNumerosGenerados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            listaNumerosGenerados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales(){
    asignarTexto('h1','Juego del número secreto!');
    asignarTexto('p',`Indica un número del 1 al ${numeroMaximo}`);
    contador = 1;
    numeroSecreto = generarNumeroSecreto();
}

function reiniciarJuego(){
    //limpiar la caja.
    limpiarValor();
    //Colocar nuevamnete le texto inicial.
    //Reseterar el contador de intentos.
    //Un nuevo numero Secreto.
    condicionesIniciales();
    // Desabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true')

};

condicionesIniciales();



// ----------------------------------------------------------------------------------------------
// Crear una función que muestre "¡Hola, mundo!" en la consola.
// function holaMundo(){
//     console.log('!Hola Mundo¡');
// }
// holaMundo();

// Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.


// function holaNombre(nombre){
//     let nombreUsuario = nombre
//     console.log('!Hola '+nombreUsuario+'¡');
// }
// holaNombre('Andres');

// // Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
// function dobleNumero(numero){
//     return numero*2;
// }
// console.log(dobleNumero(5))

// // Crear una función que reciba tres números como parámetros y devuelva el promedio de esos números.

// function promedio(num_1,num_2,num_3){
//     return (num_1+num_2+num_3)/3;
// }
// console.log(promedio(2,4,6));

// // Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
// function numeroMayor(num_1,num_2){
//     if(num_1>num_2){
//         return num_1;
//     }else{
//         return num_2;
//     }    
// }
// console.log(numeroMayor(2,4))

// function multiplicarNum(num_1){
//     return Math.pow(num_1,2);
// }
// console.log(multiplicarNum(12))