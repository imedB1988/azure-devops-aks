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

CMD [ "npm" ,"run" ,"dev"]