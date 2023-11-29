# FP-2DAW-DAW

## Practica 1

Crea una web personal (o al menos un "hola mundo") y subela a tu repositorio de github

Haz un fork de este repositorio y actualiza el fichero urls.json añadiendo al final un objeto con el formato:

```json
{
  "name": "tu nombre",
  "url": "la url a tu proyecto de github"
}
```

## Practica 2

Genera una imagen de docker para la web personal que creaste:

- Crea una imagen de docker basada en NGINX que sirva los estáticos de la web
- Sube el dockerfile a tu repositorio
- Sube la imangen de docker a tu espacio de docker hub
- Actualiza el objeto json de este repo añadiendo un campo con la ruta de tu imagen de docker

```json
[
  {
    "name": "tu nombre",
    "url": "la url a tu proyecto de github",
    "docker": "la url a tu imagen en docker hub"
  }
]
```

## Practica 3

### Mínimo:

- Crea una web (o modifica la anterior) y añade un campo input donde se pida el nombre al usuario
- Crea un API Rest (preferiblemente en node (express o similar)) Para guardar/leer dicho nombre en base de datos
- Crea una base de datos (preferiblemente MongoDB) donde almacenar dicho nombre
- Genera un Volumen para compartir los datos entre la BBDD y la API (usuario, etc)
- Construye imágenes de Docker de cada uno de los 3 proyectos para poderlos levantar independientemente
- Haz una captura de pantalla de la linea de comandos de cada contenedor donde pruebes que está funcionando
- Utiliza Compose para levantar los 3 proyectos a la vez y guárdalo todo en github

### Opcional:

- En lugar de hacer un "hola nombre" haz un ToDo list, donde puedas añadir tareas, borrarlas y marcarlas como terminadas
- Sigue la guía de buenas prácticas de Docker para generar tus imágenes
