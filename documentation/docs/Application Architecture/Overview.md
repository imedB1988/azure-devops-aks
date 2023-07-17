---
sidebar_position: 1
---

# CRUD 3-Tier Application

## Overview

The CRUD 3-tier application is a simple web application that allows users to perform Create, Read, Update, and Delete operations on a MongoDB database. The application follows a three-tier architecture, with the front end built using React.js, the back end implemented in Node.js, and MongoDB serving as the database.

## Front End Layer

The front end layer is responsible for rendering the user interface and interacting with the user. In this application, the front end is built using React.js, a popular JavaScript library for building user interfaces. React.js provides a component-based architecture that allows for efficient and reusable UI development.

To start the front end:

1. Navigate to the front end directory: `cd ./src/frontend`.

2. Install dependencies: Run `npm install` to install the necessary dependencies.

3. Start the front end server: Execute `npm run start` to launch the front end server.

The front end server will start, and you can access the application by opening a web browser and navigating to the specified URL.

## Back End Layer

The back end layer handles the business logic and acts as an intermediary between the front end and the database. In this application, the back end is implemented using Node.js, a JavaScript runtime that enables server-side development.

To start the back end:

1. Navigate to the back end directory: `cd ./src/backend`.

2. Install dependencies: Run `npm install` to install the necessary dependencies.

3. Start the back end server: Execute `npm run dev` to launch the back end server.

The back end server will start, and it will listen for requests from the front end, perform the necessary operations on the MongoDB database, and send the appropriate responses back.

## Database Layer

The database layer uses MongoDB as the database for storing and managing the application data. MongoDB is a NoSQL database that provides flexibility and scalability.

Ensure that you have a MongoDB instance set up and running. Update the database connection settings in the back end code to point to your MongoDB instance. You can specify the connection details in the back end code where the database connection is established.

## Conclusion

The CRUD 3-tier application showcases the use of React.js for the front end, Node.js for the back end, and MongoDB for the database layer. By following the instructions provided, you can start the front end and back end servers and interact with the application to perform CRUD operations on the MongoDB database.

---

