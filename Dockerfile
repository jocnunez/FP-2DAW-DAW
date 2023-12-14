FROM nginx:latest

##RUN rm /etc/nginx/conf.d/default.conf

COPY ./index.html /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]