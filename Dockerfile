FROM nginx

COPY index.html /usr/share/nginx/html

# inicia nginx cuando el contenedor se ejecuta
CMD ["nginx", "-g", "daemon off;"]