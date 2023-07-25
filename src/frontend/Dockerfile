FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json ./

# Install dependencies
RUN npm install
COPY . .
RUN npm run build

# FROM node:18-alpine AS production
# COPY --from=builder /app/build .
# COPY --from=builder /app/package.json .
# COPY --from=builder /app/node_modules ./node_modules
# RUN ls -la
# EXPOSE 3000
# CMD [ "react-scripts", "start" ]
# CMD [ "npm" ,"run" ,"start"]

FROM nginx:stable-alpine3.17-slim AS deploy
WORKDIR /usr/share/nginx/html
COPY --from=builder /app/build .
RUN rm -rf /etc/nginx/conf.d
COPY conf.d /etc/nginx/conf.d/default.conf
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]


