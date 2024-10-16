// PARA ESTE EJERCICIO SE PUEDE UTILIZAR SOLO PUBLIQUE FOR O WHILE

// Crea un array vacío llamado `stack`
const stack = []
// Crea un array `numbers` con los números del 1 al 5 in orden ascendente
const numbers = [1,2,3,4,5]
// La función multiplyByTwo tiene que devolver un array con los números multiplicados por 2 de cada elemento del array `numbers`
function multiplyByTwo(numbers) {
  // Aquí va tu código
  let multiplyByTwo = []
  for(i=0; i<numbers.length; i++) {
    multiplyByTwo[i] = numbers[i]*2
  }
  return multiplyByTwo;
}

// La función evenNumbers tiene que devolver los números pares del array `numbers`
function evenNumbers(numbers) {
  // Aquí va tu código
  let evenNumbers = []
  for(i=0; i<numbers.length; i++){
    if(numbers[i]%2==0){
      evenNumbers[evenNumbers.length] = numbers[i]
    }
  }
  return evenNumbers;
}

// La función numbersBackwards tiene que devolver los números del array `numbers` en orden inverso
function numbersBackwards(numbers) {
  // Aquí va tu código
  let numbersBackwards = []
  for(i=numbers.length; i>=0; i--){
    numbersBackwards[numbersBackwards.length] = numbers[i]
  }
  return numbersBackwards;
}

// La función `sum` tiene que devolver la suma de todos los números del array `numbers`
function sum(numbers) {
   //Aquí va tu código
  let sum = 0
  for(i=0; i<numbers.length; i++){
  sum = sum + numbers[i]
  }
return sum
}

// La función `average` tiene que devolver el promedio de todos los números del array `numbers`
function average(numbers) {
  // Aquí va tu código
  let average = 0
  for(i=0; i<numbers.length; ){
    average = average + numbers[i]
  }
  return average / average.length;
}

// La función `biggestPrime` tiene que devolver el número primo más grande de los primeros 100 números
// El parámetro numbers es el número 100
function biggestPrime(numbers) {
  // Aquí va tu código
  let biggestPrime = 0
  for (i=numbers[numbers.length-1]; i>=2; i--){
    for(j=2; j<i; j++){
      if(i%j===0){
       let isPrime = false
      } else {
        isPrime = true}
    }
    if(isPrime = true){
      biggestPrime = i
    }
  }
  return biggestPrime
}

// Crea una variable person y asígnale un objeto vacío
const person = {}
// Agrega una propiedad `name` al objeto y asígnale "Jorge" como valor
person.name = "Jorge"
// Agrega una propiedad `lastName` al objeto y asígnale "Gonzalez" como valor
person.lastName = "Gonzalez"
// Agrega una propiedad `birthYear` al objeto y asígnale 1995 como valor
person.birthYear = 1995
// Agrega una función `getFullName` al objeto que devuelva el nombre completo
person.getFullName = function(){return console.log(person.name + person.lastName)}
// Agrega una función `getBirthYear` al objeto que devuelva la edad (asumiendo que es el año 2023)
person.getBirthYear = function(){return 2023 - person.birthyear}