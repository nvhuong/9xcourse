#!/bin/bash

# Build and run 9xCourse website with Docker

echo "🚀 Building 9xCourse website..."

# Stop existing containers
docker-compose down

# Build and start containers
docker-compose up --build -d

echo "✅ 9xCourse website is running!"
echo "🌐 Access at: http://localhost:3000"
echo "📊 Check logs: docker-compose logs -f"
echo "🛑 Stop: docker-compose down"
