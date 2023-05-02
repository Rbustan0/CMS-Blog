# CMS-Blog

## Description 
This repository contains models created through a schema and sequelize extension that is then rendered through a handlebars template. It follows an MVC formate with sequelize as the ORM and express-session npm package for authentification.  


<br/>
<br/>


## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
* [Deployment](#deployment)


<br/>
<br/>

## Installation

To install necessary dependencies, run the following commands (assuming you are on git bash and already have node.js/nodemon installed):

1. Clone the repository where you want to save the code:  
```
git clone [HTTPS/SSH/CLI link]
``` 

2. Navigate over to files in terminal
3. Type in terminal:  
``` 
npm i
```   
4. Run the schema.sql in your local machine and change connection details to match your root and password values.

5. Issue the following command to populate your database with seeds:

```
node seeds/index.js
```

6. Run either commands through node in the terminal:  
```
 node server.js
``` 

```
 nodemon server.js
``` 

7. Run a popular REST client (such as insomnia) to interact with the API and test its API functionality. OR go on the web server through the html link http://localhost:3001/. 

<br/>
<br/>

## Usage

This program can be used to observe how js can tie in with mysql2 through using an ORM framework such as sequelize. Users can also learn and understand how it ties in with express framework as well as how everything connects in general backend coding with javascript. This program can be used to test and observe how sequelize as well connects with different tables in the database as well. It also shows how the front end can connect with the handlebars engine and library. It effectively shows the user MVC format for a basic fullstack application that connects the front end to a database as well as a basic UI interaction with data that was generated and saved.
<br/>
<br/>


## Credits
* EdX for sample documentation to begin with as well as a sample stylize library for teh website. (did not design css myself)

<br/>
<br/>

### Creation
* [Rbustan0](https://github.com/Rbustan0) 
<br/>

### Extensions/NPM's/Misc Programs used:
nodemon, node, mysql2, sequelize, express, SQL Workbench, handlebars, Insomnia

<br/>
<br/>


## License
  
  ![License](https://img.shields.io/badge/license-MIT-blue.svg)

  
<br/>
<br/>


## Deployment

<br/>

* deployed link: [Deployed Github Page](https://github.com/Rbustan0/ORMius)

<br/>

* Click on this link to see an example of the site without running your own seeded database:
[Heroku Link](https://shielded-dusk-67786.herokuapp.com/) 

