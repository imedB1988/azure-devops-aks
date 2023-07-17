---
sidebar_position: 1
---

# Dockerizing the Front End

To containerize the front end application using Docker, follow these steps:

## Dockerfile

you will find this Dockerfile with the following content in `./src/frontend`:

```yaml
FROM node:16 AS builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json ./

# Install dependencies
RUN npm install

EXPOSE 3000

# Copy the rest of the application files
COPY . .

CMD ["npm", "run", "start"]
```

## Building the Docker Image

To build the Docker image for the front end, run the following command in the terminal:

```bash
docker build -t frontend:v1 ./src/frontend
```

## Running the Front End Container

To run the front end container independently, execute the following command:

```bash
docker run --rm --name frontend -p 3000:3000 frontend:v1
```

# Dockerizing the Back End

To containerize the back end application using Docker, follow these steps:

## Dockerfile

You will find a Dockerfile with the following content in `./src/backend`:

```yaml
FROM node:16 AS builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json ./

# Install dependencies
RUN npm install

EXPOSE 3700

# Copy the rest of the application files
COPY . .

CMD ["npm", "run", "dev"]
```

## Building the Docker Image

To build the Docker image for the back end, run the following command in the terminal:

```bash
docker build -t backend:v1 ./src/backend
```

## Running the Back End Container

To run the back end container independently, execute the following command:

```bash
docker run --rm --name backend -p 3700:3700 backend:v1
```

# Running the Database as a Container

To run the database as a container, follow these steps:

## Prerequisites

Ensure that you have Docker installed on your system.

## Starting the MongoDB Container

Execute the following command to start the MongoDB container:

```bash
docker run --rm --name mongo6-jammy -e MONGO_INITDB_DATABASE=crud-users-db -v /tmp/mongo-data:/data/db -p 27017:27017 mongo:6-jammy
```

This command will start a MongoDB container with the specified database name (`crud-users-db`) and mount a volume at `/tmp/mongo-data` to persist the data. The container will be accessible on port 27017.

---

