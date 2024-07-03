
<div align="center"><h1> :sparkles: BOOK ADVICER PROJECT :sparkles: </h1> </div>
<div align="center"><h2> 🚥 FULL STACK AI PROJECT 🚥 </h2> </div>


## Technology stacks

## BACK-END

 - [x] Java

 - [x] Spring Boot
       
 **Dependencies**
 
 - Spring Web
 - Spring AI (OpenAI)
 - Lombok
 - Devtools
 - Data MongoDB

 - [x] MongoDB (Database)

 - [x] Maven

 - [x] Postman

 - [x] Swagger

<p align="left"> 
<a href="https://www.java.com" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" alt="java" width="40" height="40"/> </a> 
<a href="https://spring.io/" target="_blank"> <img src="https://www.vectorlogo.zone/logos/springio/springio-icon.svg" alt="spring" width="40" height="40"/> </a>
<a href="https://www.mongodb.com/" target="_blank"> <img src="https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg" width="40"height="40"/>
<a href="https://maven.apache.org/" target="_blank"> <img src="https://icons-for-free.com/iff/png/256/vscode+icons+type+maven-1324451386617447973.png"  width="40" height="40"/> 
 <a href="https://www.postman.com/" target="_blank"> <img src="https://cdn.iconscout.com/icon/free/png-512/free-postman-3521648-2945092.png?f=webp&w=256" width="40" height="40"/>
<a href="https://swagger.io/" target="_blank"> <img src="https://seeklogo.com/images/S/swagger-logo-A49F73BAF4-seeklogo.com.png" width="40" height="40"/>
 
</a>
</p>

## `File Structure` 

### ` 🏗️ N-Layered Architecture`

![image](https://github.com/FMSS-Full-Stack-Bootcamp/grup-bir/assets/58560920/5dd809e9-b4c6-40d6-8c76-8eda11bad234)

## `Service Endpoints`

### `User Service Endpoints`
| Route                  | HTTP     | Request Body                                                                                                                                                                                | Description 	     |
|------------------------|----------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------|
| /books                 | `POST`   | { "question": "Recommend me 5 books similar to Platon's book titled Sokratesin Savunması in the philosophy category. Convert output to french" }                                            | Generate books    |
| /books                 | `GET`    | Empty                                                                                                                                                                                      | Get Books         |



      
## FRONT-END

 - [x] React JS

 - [x] Vite JS

 - [x] Ant Design (UI)


<p align="left">
<a href="https://vitejs.dev/" target="_blank"> <img src="https://vitejs.dev/logo-with-shadow.png" width="40" height="40"/> 
<a href="https://react.dev/" target="_blank"> <img src="https://upload.wikimedia.org/wikipedia/commons/4/47/React.svg" width="40" height="40"/> 
<a href="https://ant.design/" target="_blank"> <img src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" width="40" height="40"/> 
</a>
</p>

## `Aplication Screenshots` 

![image](https://github.com/FMSS-Full-Stack-Bootcamp/grup-bir/assets/58560920/01fc1e16-0c11-4c2a-a06f-4927006a10fc)

![image](https://github.com/FMSS-Full-Stack-Bootcamp/grup-bir/assets/58560920/aafb0e50-7600-4786-b0a1-40a38646797f)



## `Build and Run Project`
> Requires **JDK 21** to run the project, **Git** to pull from remote repository, and **Docker** to run docker-compose

Follow the steps to build and run the project:
- Clone the repository from Git
```bash
  git clone https://github.com/FMSS-Full-Stack-Bootcamp/grup-bir.git
```

- Run the project with Docker
```shell
  docker-compose up -d && docker-compose down 
```
After all services are up and running with `Docker`:
- `BookAdviserApiApplication(Back-end)` interface can be accessed from port **8080**
- `MongoDB Express` interface can be accessed from port **8081**
- `Vite + React + TS (front-end)` interface can be accessed from port **5173 or 5174**
> All running services can access dependent graphic interfaces via the web without being dependent on the local environment.



