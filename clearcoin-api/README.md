# 🚀 ClearCoin API

It's a REST API to manage user virtual wallerts.

No DB used as a storage layer since it would make the CodeChallengue longer.
## Requirements

For building and running the application you need:

- [JDK 11](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html)
- [Maven 3](https://maven.apache.org)

## 📦 Running the application locally

There are several ways to run a Spring Boot application on your local machine. One way is to execute the `main` method in the `Application` class from your IDE.

Alternatively you can use the [Spring Boot Maven plugin](https://docs.spring.io/spring-boot/docs/current/reference/html/build-tool-plugins-maven-plugin.html) like so:

```shell
mvn spring-boot:run
```

## ⭐️ Features

- Auto-documented API http://localhost:8080/swagger-ui.html
- UserController: Retrieve user data, including wallet details.
- WalletController: Retrieve wallet data and execute transfers.

## 🎁 Bonus
- Dockerized App

In order Build the image and fire up the container:

- At root build folder <code>docker-compose up</code> 
- It would create clearcloin-api and clearcoin-web docker images, and start-up the container.
- You can access to the application opening the following [URL](http://localhost:3001)


## Possible Ideas of Improvements
- Add MongoDB as storage layer.
- Convert into Reactive REST API using Spring WebFlux 