FROM maven:3.6.0-jdk-11-slim AS build

COPY src /home/app/src

COPY pom.xml /home/app

RUN mvn -f /home/app/pom.xml clean package

FROM adoptopenjdk/openjdk11:latest

RUN mkdir /opt/app

COPY japp.jar /opt/app

EXPOSE 8080
CMD ["java", "-jar", "/opt/app/japp.jar"]

