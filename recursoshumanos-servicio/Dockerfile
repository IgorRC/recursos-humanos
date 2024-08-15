FROM openjdk:17-jdk-slim
ARG JAR_FILE=target/recursoshumanos-0.0.1-SNAPSHOT.jar
COPY ${JAR_FILE} servicio_recursoshumanos.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","servicio_recursoshumanos.jar"]
