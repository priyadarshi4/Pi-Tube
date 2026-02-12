# Use stable Node LTS (VERY IMPORTANT)
FROM node:18-alpine

# Create app directory
WORKDIR /app

# Copy only package files first (faster builds)
COPY package*.json ./

# Install production dependencies only
RUN npm install --omit=dev

# Copy remaining project files
COPY . .

# App port
EXPOSE 5000

# Start server
CMD ["node", "server.js"]

