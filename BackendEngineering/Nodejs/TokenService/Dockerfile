# Use Node.js 18.16.0 as base image
FROM node:18.16.0

# set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to container
COPY package*.json ./

# Install dependencies
RUN npm install


# Install TypeScript globally
RUN npm install -g typescript

# Copy the rest of the application code
COPY  . .

# Build TypeScript code
RUN npm run build

# Expose port 5000
EXPOSE 3000

# Command to run the application
CMD ["node", "dist/index.js"]
