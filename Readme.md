
<div align="center"><h1> :sparkles: PATIKA+ BOOK ADVICER GROUP PROJECT :sparkles: </h1></div>
<div align="center"><h2> 🚥 FULL STACK AI PROJECT 🚥 </h2> </div>


## ↓ Technology Stacks ↓

## BACK-END 

* [![Java][Java-logo]][Java-url]
* [![Spring][Spring-logo]][Spring-url]
* [![Maven][Maven-logo]][Maven-url]
* [![MongoDB][Mongodb-logo]][Mongodb-url]
* [![Postman][Postman-logo]][Postman-url]
* [![Swagger][Swagger-logo]][Swagger-url]
       

### Dependencies
 
<b>✔️ Spring Web </b>

<b>✔️ Spring AI (OpenAI) </b>

<b>✔️ Lombok </b>

<b>✔️ Devtools </b>

<b>✔️ Data MongoDB </b>


 - [x] MongoDB (Database)

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


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png

[Java-logo]: https://img.shields.io/badge/java-000000?style=for-the-badge&logo=spring&logoColor=white
[Java-url]: https://www.java.com/tr/
[Spring-logo]: https://img.shields.io/badge/Spring_Boot-DD0031?style=for-the-badge&logo=springboot&logoColor=white
[Spring-url]: https://spring.io/
[Maven-logo]: https://img.shields.io/badge/maven-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[Maven-url]: https://maven.apache.org
[Mongodb-logo]: https://img.shields.io/badge/Mongo_DB_(Database)-4A4A55?style=for-the-badge&logo=mongodb&logoColor=FF3E00
[Mongodb-url]: https://www.mongodb.com
[Postman-logo]: https://img.shields.io/badge/Postman-FF2D20?style=for-the-badge&logo=postman&logoColor=white
[Postman-url]: https://swagger.io
[Swagger-logo]: https://img.shields.io/badge/Swagger-563D7C?style=for-the-badge&logo=swagger&logoColor=white
[Swagger-url]: https://swagger.io
[Rest-logo]: https://img.shields.io/badge/Rest_Template-563D7C?style=for-the-badge&logo=rest&logoColor=white
[Rest-url]: https://img.shields.io/badge/Rest_Template-563D7C?style=for-the-badge&logo=rest&logoColor=white

[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 


