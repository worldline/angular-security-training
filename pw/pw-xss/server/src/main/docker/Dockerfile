FROM openjdk:8-jre-alpine@sha256:f362b165b870ef129cbe730f29065ff37399c0aa8bcab3e44b51c302938c9193

ENV SPRING_OUTPUT_ANSI_ENABLED=ALWAYS \
    JHIPSTER_SLEEP=0

# add directly the war
ADD *.war /app.war

VOLUME /tmp
EXPOSE 8080
CMD echo "The application will start in ${JHIPSTER_SLEEP}s..." && \
    sleep ${JHIPSTER_SLEEP} && \
    java -Djava.security.egd=file:/dev/./urandom -jar /app.war
