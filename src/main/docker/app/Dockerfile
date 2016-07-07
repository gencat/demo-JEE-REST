FROM gencatcloud/java:7

VOLUME /tmp

COPY run.sh /entrypoint.sh
RUN chmod 775 /entrypoint.sh

CMD ["/entrypoint.sh"]