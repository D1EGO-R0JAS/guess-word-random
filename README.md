# Guess-word-random // Adivina la palabra random

Adivina la palabra random es un paquete que hace uso de un paquete llamado [random_numbers_generator](https://www.npmjs.com/package/random_numbers_generator "random_numbers_generator") para generar numeros random o al azar, este paquete es una puesta en practica del curso de npm de platzi, para poder practicar el uso y creacion de paquetes o dependencias dentro de npm y el entorno de desarollo, este paquete cuenta con 49 palabras, donde cada palabra tiene 3 pistas para adivinar dicha palabra, un ejemplo seria el siguiente:

palabra: balon

pistas: Instrumento o elemento usado en un deporte, Es un objeto redondo con dos sílabas, Normalmente puede ser de forma circular con cuadrados hexagonales de color blanco y negro.

con este paquete puedes crear un juego para adivinar la palabra con tres vidas, y en cada vida das una pista nueva, hasta terminar las tres vidas. Ya la interfaz y demas funcionalidades dependen exclusivamente de tí; la dependencia lo unico que hace es darte una palabra al azar con las tres pistas y nada mas, el resto lo dejo a tu imaginacion.


## Instalacion o Uso

Instalacion de Guess-word-random, lo primero es tener node.js en nuestro equipo y con npm correr los siguientes comandos o lineas de codigo.

#### 1. iniciar el proyecto con npm
````bash
  npm init -y
````
#### 2. instalar las dependencias del proyecto Guess-word-random
```bash
  npm install guess-word-random
```
    
## Demo

Puedes usar este codigo para segmentar la palabra y las pistas.
````bash
const { word } = require('guess-word-random');

const resultado = word();

const palabra = resultado.laPalabra;

const pistas = resultado.pistas;

console.log(palabra);

console.log(pistas);
````
Debes tener en cuenta que esta es la estructura de las palabras.
````bash
const palabrasConPistas = [
    {palabra: 'la palabra', pistas: ['psita 1', 'pista 2', 'pista tres']},
    {palabra: 'la palabra', pistas: ['psita 1', 'pista 2', 'pista tres']}
]
````
Es importante tener en cuenta que la palabra es una sola no tiene articulos como la moto, la casa, sino que es casa, moto.  
## Contribución

Si deseas contribuir con agregar mas palabras o tienes alguna idea para mejorar esta dependencia, te invito a que la hagas a traves de github con un pull request, para esto debes hacer un fork del proyecto, y solicitar el pull request, el proyecto es de codigo abierto, por si quieres hacer tu aporte o solo entender como funciona, no tendra grandes actualizaciones a menos que sea muy usado, claro esta.

te dejo el enlace del repositorio en github por si quieres ir.

https://github.com/D1EGO-R0JAS/guess-word-random

mas adelante integrare esta dependencia a un proyecto, para que puedan ver la idea o el proposito de este paquete.


## Autor

- [@D1EGO-R0JAS](https://github.com/D1EGO-R0JAS)


## License

[MIT](https://choosealicense.com/licenses/mit/)

