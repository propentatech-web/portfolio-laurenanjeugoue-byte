FROM nginx:alpine

RUN mkdir /usr/share/nginx/html/portfolio-laurenanjeugoue-byte/
RUN rm -rf /usr/share/nginx/html/portfolio-laurenanjeugoue-byte/*

COPY . /usr/share/nginx/html/portfolio-laurenanjeugoue-byte/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
