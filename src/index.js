
const { getRandomNumber } = require('random_numbers_generator');

const palabrasConPistas = [
    { palabra: 'balon', pistas: ['Instrumento o elemento usado en un deporte', 'Es un objeto redondo con dos sílabas', 'Normalmente puede ser de forma circular con cuadrados hexagonales de color blanco y negro'] },
    { palabra: 'guitarra', pistas: ['Instrumento musical', 'Tiene cuerdas', 'Se toca con las manos'] },
    { palabra: 'computadora', pistas: ['Dispositivo electrónico', 'Se usa para procesar información', 'Tiene teclado y pantalla'] },
    { palabra: 'perro', pistas: ['Animal doméstico', 'Ladra', 'Es conocido como el mejor amigo del hombre'] },
    { palabra: 'bicicleta', pistas: ['Medio de transporte', 'Tiene dos ruedas', 'Se usa pedaleando'] },
    { palabra: 'televisión', pistas: ['Aparato electrónico', 'Se usa para ver programas', 'Tiene una pantalla grande'] },
    { palabra: 'libro', pistas: ['Objeto para leer', 'Tiene páginas', 'Puede contar historias'] },
    { palabra: 'mesa', pistas: ['Mueble', 'Tiene patas', 'Se usa para comer o trabajar'] },
    { palabra: 'avión', pistas: ['Medio de transporte', 'Vuela', 'Se usa para viajar largas distancias'] },
    { palabra: 'ventana', pistas: ['Abertura en una pared', 'Deja pasar la luz', 'Puede tener vidrio'] },
    { palabra: 'teléfono', pistas: ['Dispositivo de comunicación', 'Se usa para llamar', 'Puede ser móvil o fijo'] },
    { palabra: 'zapato', pistas: ['Prenda de vestir', 'Se usa en los pies', 'Puede ser de diferentes estilos'] },
    { palabra: 'lámpara', pistas: ['Objeto que da luz', 'Puede ser de mesa o de techo', 'Se usa para iluminar'] },
    { palabra: 'pluma', pistas: ['Instrumento de escritura', 'Usa tinta', 'También puede referirse a una parte de un ave'] },
    { palabra: 'refrigerador', pistas: ['Electrodoméstico', 'Mantiene los alimentos fríos', 'Tiene una puerta y compartimentos'] },
    { palabra: 'carro', pistas: ['Medio de transporte', 'Tiene cuatro ruedas', 'Se usa para desplazarse por carretera'] },
    { palabra: 'reloj', pistas: ['Objeto que indica la hora', 'Se lleva en la muñeca o se cuelga en la pared', 'Puede ser analógico o digital'] },
    { palabra: 'sofá', pistas: ['Mueble', 'Se usa para sentarse', 'Generalmente tiene cojines'] },
    { palabra: 'pintura', pistas: ['Arte visual', 'Se realiza con pinceles y colores', 'Puede estar en un lienzo'] },
    { palabra: 'cuchara', pistas: ['Utensilio de cocina', 'Se usa para comer', 'Tiene una forma cóncava'] },
    { palabra: 'camiseta', pistas: ['Prenda de vestir', 'Se usa en la parte superior del cuerpo', 'Puede ser de manga corta o larga'] },
    { palabra: 'coche', pistas: ['Medio de transporte', 'Tiene cuatro ruedas', 'Se usa para viajar por carretera'] },
    { palabra: 'pelota', pistas: ['Instrumento de juego', 'Es redonda', 'Se usa en muchos deportes'] },
    { palabra: 'mariposa', pistas: ['Insecto', 'Tiene alas coloridas', 'Empieza como una oruga'] },
    { palabra: 'sombrero', pistas: ['Prenda de vestir', 'Se usa en la cabeza', 'Puede tener ala'] },
    { palabra: 'león', pistas: ['Animal salvaje', 'Es conocido como el rey de la selva', 'Tiene una melena'] },
    { palabra: 'piano', pistas: ['Instrumento musical', 'Tiene teclas', 'Se toca con las manos'] },
    { palabra: 'manzana', pistas: ['Fruta', 'Puede ser roja, verde o amarilla', 'Es conocida por el dicho "una al día, mantiene al doctor en la lejanía"'] },
    { palabra: 'tijeras', pistas: ['Herramienta de corte', 'Tiene dos hojas', 'Se usa para cortar papel o tela'] },
    { palabra: 'flor', pistas: ['Parte de una planta', 'Es colorida y fragante', 'Se encuentra en jardines'] },
    { palabra: 'mochila', pistas: ['Accesorio', 'Se usa para llevar cosas en la espalda', 'Tiene correas'] },
    { palabra: 'barco', pistas: ['Medio de transporte', 'Navega en el agua', 'Puede ser de vela o motor'] },
    { palabra: 'lluvia', pistas: ['Fenómeno meteorológico', 'Consiste en la caída de agua', 'Ocurre en nubes'] },
    { palabra: 'estrella', pistas: ['Objeto celeste', 'Brilla en la noche', 'El sol es un ejemplo cercano'] },
    { palabra: 'montaña', pistas: ['Elevación natural del terreno', 'Puede ser alta y escarpada', 'Es parte del paisaje'] },
    { palabra: 'escalera', pistas: ['Objeto para subir o bajar', 'Tiene peldaños', 'Se usa en casas y edificios'] },
    { palabra: 'puerta', pistas: ['Abertura en una pared', 'Permite el paso de personas', 'Tiene una manija o pomo'] },
    { palabra: 'cepillo', pistas: ['Instrumento de aseo', 'Se usa para peinar el cabello', 'Tiene cerdas'] },
    { palabra: 'radio', pistas: ['Dispositivo de comunicación', 'Se usa para escuchar música o noticias', 'Funciona con ondas'] },
    { palabra: 'almuerzo', pistas: ['Comida del mediodía', 'Es una de las comidas principales del día', 'Se toma después del desayuno'] },
    { palabra: 'chaqueta', pistas: ['Prenda de vestir', 'Se usa en la parte superior del cuerpo', 'Proporciona abrigo'] },
    { palabra: 'jabón', pistas: ['Producto de limpieza', 'Se usa para lavar', 'Puede ser líquido o en barra'] },
    { palabra: 'cine', pistas: ['Lugar de entretenimiento', 'Se proyectan películas', 'Tiene una pantalla grande'] },
    { palabra: 'gato', pistas: ['Animal doméstico', 'Maúlla', 'Es conocido por su agilidad y curiosidad'] },
    { palabra: 'cuchillo', pistas: ['Herramienta de corte', 'Tiene una hoja afilada', 'Se usa para cortar alimentos'] },
    { palabra: 'árbol', pistas: ['Planta grande', 'Tiene tronco y ramas', 'Proporciona sombra'] },
    { palabra: 'pescado', pistas: ['Animal acuático', 'Se encuentra en ríos y mares', 'Es una fuente de alimento'] },
    { palabra: 'globo', pistas: ['Objeto de fiesta', 'Se infla con aire o helio', 'Puede ser de colores diversos'] },
    { palabra: 'periódico', pistas: ['Publicación diaria', 'Contiene noticias e información', 'Se imprime en papel'] }
];

 function word (){
    const anyNumber = getRandomNumber(0,50);
    const laPalabra = palabrasConPistas[anyNumber].palabra;
    const pistas = palabrasConPistas[anyNumber].pistas;
    return { laPalabra, pistas }        
 }
 module.exports = { word };




