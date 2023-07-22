FROM node:16-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json ./

# Install dependencies
RUN npm install
COPY . .
# build the app for production
RUN npm run build

FROM nginx:1.25.1 as deploy
WORKDIR /usr/share/nginx/html
COPY --from=builder /app/build .


# Copy built files from the production stage
COPY --from=builder /app/build .
EXPOSE 80

# # Run the app
# CMD ["serve", "-s", ".", "-p", "80"]    


