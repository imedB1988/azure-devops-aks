FROM node:16-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json ./

# Install dependencies
RUN npm install ci --only=production
COPY . .
# EXPOSE 3000
# CMD [ "npm" ,"run" ,"start"]
# build the app for production
RUN npm run build

FROM nginx:stable-alpine3.17-slim AS deploy
WORKDIR /usr/share/nginx/html
COPY --from=builder /app/build .
RUN rm -rf /etc/nginx/conf.d
COPY conf.d /etc/nginx/conf.d/default.conf
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]
# # Run the app



