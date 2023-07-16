FROM node:lts as development
WORKDIR /home/node/app
# Install (not ci) with dependencies, and for Linux vs. Linux Musl (which we use for -alpine)
RUN npm install
# Switch to the node user vs. root
USER node
# Expose port 3000
EXPOSE 3000
# Start the app in debug mode so we can attach the debugger
CMD ["npm", "start"]
