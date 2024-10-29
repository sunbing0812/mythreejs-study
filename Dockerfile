FROM hub-devops.cgws.com/library/nginx:1.19.9-alpine
RUN mkdir -p /usr/share/nginx/html/icsp-pc-web/
COPY ./dist/  /usr/share/nginx/html/icsp-pc-web/
