# Prerequisites

- Basic knowledge of Angular.
- OWASP Top 10 Vulnerabilities.

# Development environment for practical work

::: tip 
If it is allowed by your local security policy, you can work under a Linux VM, to get a better development experience. This is not mandatory for this training though.
:::

To implement practical works on your local system, you need the following:
- Node.js v16.10+ (https://nodejs.org/en/download/)
- npm package manager (installed with Node.js)
- Maven 3 (https://maven.apache.org/download.cgi)
- Java 11 (https://www.azul.com/downloads/?architecture=x86-64-bit&package=jdk)
- Visual Studio Code (https://code.visualstudio.com/) or any IDE 

# Practical work: Setup your project

The project used for practical works stands as the webapp backend and hosts the RESTful api of the ecommerce website based on Spring stack. It is composed of two prject:

- A server created using Spring
- A client created using Angular

## Get started
- **Clone the project**
  ```sh
  git clone https://github.com/worldline/angular-security-training.git
  ```
- **Go to first practical work**
  ```sh
  cd angular-security-training/pw/pw-jwt-oauth
  ```
- **Open the "server" folder in a terminal and execute "mvn"** 
  
  **Optional** : only in case of error on jdk version during execution, export JAVA_HOME variable and re-execute mvn
  ```sh
  export JAVA_HOME='PATH_TO_JDK11_ROOT_FOLDER';
  mvn
  ```
- **Open the "client" folder in another terminal**
- **npm install** (only for the first time)
- **npm start**
- **Open the url "http://localhost:4200" in a browser**
