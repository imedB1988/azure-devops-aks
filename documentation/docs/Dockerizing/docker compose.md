---
sidebar_position: 2
---

# Docker Compose Configuration

To create and manage multiple containers simultaneously, you can use Docker Compose. The following Docker Compose configuration file allows you to deploy the front end, back end, and MongoDB containers together:

```yaml
version: '3'
services:
  mongodb:
    container_name: mongodb
    image: mongo:6-jammy
    environment:
      - MONGO_INITDB_DATABASE=crud-users-db
    volumes:
      - /tmp/mongo-data:/data/db
    ports:
      - '27017:27017'
    networks:
      api:
        ipv4_address: 172.20.0.2

  frontend:
    container_name: frontend
    build:
      context: ./src/frontend
      dockerfile: Dockerfile
    ports:
      - 3000:3000
    depends_on:
      - backend
    networks:
      api:
        ipv4_address: 172.20.0.3

  backend:
    container_name: backend
    build:
      context: ./src/backend
      dockerfile: Dockerfile
    ports:
      - 3700:3700
    depends_on:
      - mongodb
    networks:
      api:
        ipv4_address: 172.20.0.4
    environment:
      - MONGO_URI=mongodb://mongodb:27017/crud-users-db
      - PORT=3700

networks: 
  api: 
    driver: bridge
    ipam:
      config:
        - subnet: 172.20.0.0/16
```

## Building the Containers

To build the container images, run the following command in the terminal:

```bash
docker-compose build
```

This command will build the Docker images for the front end and back end, as specified in the Docker Compose configuration file.

## Launching the Containers

To launch the containers, execute the following command:

```bash
docker-compose up -d
```

The containers will be started in detached mode (`-d`), allowing them to run in the background. The front end container depends on the back end container, and the back end container depends on the MongoDB container.

---