FROM httpd:2.4.46 

WORKDIR /var/www/html/

COPY ./src /var/www/html/src
COPY ./index.html /var/www/html/
COPY ./httpd.conf /usr/local/apache2/conf/

RUN chmod -R 755 /var/www/html/
RUN chown -R www-data:www-data /var/www/html/

ENV TZ America/Bahia

EXPOSE 80