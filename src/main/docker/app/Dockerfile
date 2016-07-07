FROM gencatcloud/java:7

VOLUME /tmp
COPY app.war /app.war

COPY run.sh /entrypoint.sh
RUN chmod 775 /entrypoint.sh

CMD ["/entrypoint.sh"]