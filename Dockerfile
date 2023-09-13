# Use an official Node.js runtime as the base image
FROM node:18

# Create and set the working directory
WORKDIR /bookfind

# Copy the package.json and package-lock.json files for the client and install client dependencies
COPY client/package*.json ./client/
WORKDIR /bookfind/client
RUN npm install

# Move back to the main working directory
WORKDIR /bookfind

# Copy the package.json and package-lock.json files for the server and install server dependencies
COPY server/package*.json ./server/
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the ports your server and React app will listen on (adjust these as needed)
EXPOSE 3000 8080

# Define environment variables if necessary
# ENV VARIABLE_NAME=value

# Command to start both the client and server (You can customize this based on your application)
CMD ["npm", "start"]
