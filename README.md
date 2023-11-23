# FP-2DAW-DAW

# Practica 1

Crea una web personal (o al menos un "hola mundo") y subela a tu repositorio de github

Haz un fork de este repositorio y actualiza el fichero urls.json añadiendo al final un objeto con el formato:

```json
{
  "name": "tu nombre",
  "url": "la url a tu proyecto de github"
}
```

# Practica 2

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
