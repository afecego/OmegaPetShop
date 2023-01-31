# OmegaPetShop

This project is a WEB application in which the user can enter through a Login. If the user does not exist, he can create a new one. Within the app you can CRUD products (create, edit, delete or list)

<p align="center">
  <img src="Clip_aplicacion.gif" alt="animated" />
</p>

## Starting 🚀

The web application was developed on a front with _React_ and a backend with _NodeJS_. For the administration of the database, a server was used in _MongoDB_

### Prerequisites for local use📋

* For the connection to the database, edit the file "variables.env" in this path:

\OmegaPetShop\variables.env

* For the connection between the backend and the front end, edit the “baseURL” of the “config.js” file located in this path (localhost on port 4000):

\OmegaPetShop\front\src\config.js

* Dependencies for React:

```
  "dependencies": {
    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "admin-lte": "3.2",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.4.3",
    "react-scripts": "^2.1.8",
    "sweetalert": "^2.1.2",
    "web-vitals": "^2.1.4"
  }
```

* Dependencies for NodeJS:

```
  "dependencies": {
    "bcryptjs": "^2.4.3",
    "cors": "^2.8.5",
    "dotenv": "^10.0.0",
    "express": "^4.18.2",
    "express-validator": "^6.14.0",
    "jsonwebtoken": "^8.5.1",
    "mongoose": "^6.0.14"
  },
  "devDependencies": {
    "nodemon": "^2.0.20"
  }
```

### Running the app from local

To initialize the backend, in the path "\OmegaPetShop\" execute the command:

```
> npm start
```

To initialize the front, in the path "\OmegaPetShop\front\src\ execute the command:

```
> npm start
```



## Authors ✒️

* **Juan Sebastián Gamboa** - [sebassena](https://github.com/sebassena)
* **Adrian Felipe Ceron Gonzalez** - [afecego](https://github.com/afecego)

