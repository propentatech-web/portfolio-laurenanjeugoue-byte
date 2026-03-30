FROM propentatech/portfolios-formation-dev-web2026:latest

RUN mkdir -p /usr/share/nginx/html/portfolio-laurenanjeugoue-byte/
RUN rm -rf /usr/share/nginx/html/portfolio-laurenanjeugoue-byte/*

COPY . /usr/share/nginx/html/portfolio-laurenanjeugoue-byte/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
