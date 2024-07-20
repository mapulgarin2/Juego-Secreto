// function masaCorporal(peso,altura) {
//     let imc = peso / (altura * altura);
//     return imc;
    
// }
// masaCorporal(80,1.80);

// function factorial(numero) {
//     let factorial = 1;
//     for (let i = 1; i <= numero; i++) {
//         factorial *= i;
//     }
//     return factorial;
    
// }
// let numero = 7
// let resultado = factorial(numero);
// console.log('El factorial de ' + numero + ' es ' + resultado);


// function conversionDolar(dolares){
//     let conversion = dolares * 3974;
//     return conversion;
// }
// let valorDolares = 10;
// let conversion = conversionDolar(valorDolares);
// console.log(valorDolares + ' dolares son ' + conversion + ' pesos');

// function calculoAreaRectangulo(base,altura){
//     let area = base*altura;
//     let perimetro = (base*2)+(altura*2);
//     console.log ('El area es ' + area + ' y el perimetro es ' + perimetro);
// }
// let base = 10;
// let altura = 5;
// calculoAreaRectangulo(base,altura);

// function areaCirculo(radio){
//     let area = Math.PI * (radio * radio)
//     perimetro = 2 * Math.PI * radio;
//     console.log ('El area es ' + area + ' y el perimetro es ' + perimetro);
// }
// let radio = 10;
// areaCirculo(radio);

// function multNum(num){
//     for (let i = 1; i <= 10; i++) {
//         console.log (num*i);
// }
// }

// multNum(3);

// let listaGenerica = [];
// let listaLenguajesDeProgramcion =["JavaScript","Python","C++","C","klotin"];
// listaLenguajesDeProgramcion.push('Java','Rubi','GoLand');
// console.log (listaLenguajesDeProgramcion);

// function mostrarListaLenguajesDeProgramcion(){
//     if (listaLenguajesDeProgramcion.length > 0) {
//         console.log (listaLenguajesDeProgramcion);
//     }else{
//         console.log ('La lista esta vacia');
//     }
// }

// mostrarListaLenguajesDeProgramcion();

// function mostrarListaLenguajesDeProgramcion2(){
//     for (i= listaLenguajesDeProgramcion.length-1;i >= 0;i--){
// console.log(listaLenguajesDeProgramcion[i])
//     } 
// }
// mostrarListaLenguajesDeProgramcion2();

// let listaNumeros = [2,4,8]
// let sum = 0
// console.log(listaNumeros.length)
// function promedioListaNumeros(){
//     for (i=0;i<listaNumeros.length;i++){
//         sum = listaNumeros[i] + sum
//     }
//     let prom =(sum / listaNumeros.length).toFixed(2)
//     console.log(prom)}

// promedioListaNumeros()



// function numMayorMenor(lista) {
//     let mayor = lista[0];
//     let menor = lista[0];
//     for (i= 0;i < lista.length;i++){
//         if (lista[i]>mayor){
//             mayor = lista[i];
//         }
//         if (lista[i]<menor){
//             menor = lista[i];
//         }
//     }
//     console.log(`Mayor = ${mayor}`)
//     console.log(`Menor = ${menor}`)    
// }

// let numero =[15, 8, 25, 5, 12];
// numMayorMenor(numero);

// function sumLista(lista){
//     let sum = 0;
//     for (i= 0;i<lista.length;i++ ){
//         sum = lista[i] + sum;
//     }
//     return `La suma de la lista = ${sum}`;
// }
// let lista_1 = [2,4,6,8];
// let suma = sumLista(lista_1);
// console.log(suma);


/**
 * Finds the index of a given number in a list.
 * 
 * @param {Array} list - The list to search in.
 * @param {number} num - The number to find.
 * @returns {number} - The index of the number in the list, or -1 if not found.
 */
// function encontrarNUmerolist(list, num) {
//     // Iterate through each element in the list
//     for (let i = 0; i < list.length; i++) {       
//         // If the current element is equal to the given number
//         if (list[i] === num) {           
//             // Return the index of the number
//             return i;
//         }
//     }       
//     // If the number is not found, return -1
//     return -1;
// }
// let num= 4;
// let list = [1,2,7,8];
// let solucion = encontrarNUmerolist(list,num);
// console.log(solucion);


function sumaList(list_1, list_2) {  
    let sumList = []
    if (list_1.length == list_2.length){
        for (i = 0; i < list_1.length; i ++){
            sumList.push(list_1[i] + list_2[i]);
        }
        return sumList;
    }
    return `Las lista no son iguales`;
}  

let list_1 = [1,2,3,9];
let list_2 = [1,2,3,4];

let resultado = sumaList(list_1,list_2);
console.log(resultado);

function numListCuadrado(lista){
    let listCuadrado = [];
    for (i = 0;i<lista.length;i++){
        listCuadrado.push(lista[i]*lista[i]);
    }
    return listCuadrado;
}
let lista = [1,2,3];
let solucion = numListCuadrado(lista);
console.log(solucion);
    

    