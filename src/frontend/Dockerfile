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

CMD [ "npm" ,"run" ,"start"]
# Build the app
# RUN npm run build

# # Stage 2 - Production image
# FROM nginx-alpine:16-alpine

# # Set working directory
# WORKDIR /app

# # Install serve globally
# RUN npm install -g serve

# # Copy the build output from the builder stage
# COPY --from=builder /app/build .

# # Expose port (change it if needed)
# EXPOSE 80

# # Run the app
# CMD ["serve", "-s", ".", "-p", "80"]    