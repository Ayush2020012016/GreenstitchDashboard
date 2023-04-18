# Project Overview

## client 

### In the client I have used React.js Tailwindcss and for the chart I have implemented the Google charts.

--- 

## backend


### In this section  I have used express, and for the database I have used Mongodb.

--- 

## Feature

### As Stated in the requirement the data, loaded for the chart is done using database that is mongodb.

---

## Here is how I deployed the application

first I deployed the  backend on render.com

- In index.js file add  
 `const port = process.env.port || 4000`
- add start script in package.json file.
- create a new project in render.com 
- add environment variables in advanced setting.
-deploy.

 Than for the client

- Created a helper.js file which contain the link to deployed backend.
- build the react project  
    `npm run build`
- directly upload the build folder to the netilfy.

## Usage

- `git clone git@github.com:Ayush2020012016/GreenstitchDashboard.git`

- `cd client`
- `npm i`
-  `cd ../backend`
- `npm i`

now start the server and client using 
`npm start` in both directories.

