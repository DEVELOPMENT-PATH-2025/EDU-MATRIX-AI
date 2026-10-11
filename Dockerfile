# Stage 1: Build stage
FROM node:22-alpine AS builder

WORKDIR /app

# Install dependencies based on package lockfile
COPY package*.json ./
RUN npm ci

# Copy source code and build production bundle
COPY . .
RUN npm run build

# Stage 2: Production runtime stage
FROM nginx:alpine AS runner

# Copy custom Nginx configuration for SPA routing & compression
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy build artifacts from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose HTTP port
EXPOSE 80

# Start Nginx server in foreground
CMD ["nginx", "-g", "daemon off;"]
