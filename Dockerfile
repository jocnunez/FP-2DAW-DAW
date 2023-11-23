# Usa una imagen base ligera de NGINX
FROM nginx:latest

# Copia los archivos estáticos de tu web al directorio de trabajo de NGINX
COPY index.html /usr/share/nginx/html

# Exponer el puerto 80 para que NGINX pueda servir el contenido
EXPOSE 80

# Comando para iniciar NGINX en primer plano al ejecutar el contenedor
CMD ["nginx", "-g", "daemon off;"]

