#!/bin/bash

java -Djava.net.preferIPv4Stack=true -Djava.security.egd=file:/dev/./urandom -Xdebug -Xrunjdwp:server=y,transport=dt_socket,address=5005,suspend=n -jar /app.war
