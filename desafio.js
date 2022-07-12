const animales = [“el lobo”, “el toro”, … ]; // 100 animalitos

const aQuienHayQueLlamar = animales.map { //a proximo hay que llamar

}

console.log(“Sal de ahí chivita chivita, sal de ahí de ese lugar”)

ahora = “la chiva” //el animal que hay que sacar

Repeat N times {

proximo = random_element(animales) //funcion que retorne numero aleatorio de indice

aQuienHayQueLlamar[ahora] = proximo //el que hay que llamar para que saque al animal anterior
 
console.log (“Hay que llamar a “ + proximo + “ para que saque a “ + ahora)

..ahora = proximo // ??

..array sacar = [] // metemos al array a otro que hay que sacar

..cursor = “la chiva” // ??

..repeat until cursor not in aQuienHayQueLlamar { // parece un bucle variable not in array 

....sacar.push_first(aQuienHayQueLlamar[cursor] + “ no quiere sacar a ” + cursor) //

....cursor = aQuienHayQueLlamar[cursor]

..}

for i in sacar {

....print(i)

..}

..print(“La chiva no quiere salir de ahí. Sal de ahí chivita chivita, sal de ahí de ese lugar”)

}