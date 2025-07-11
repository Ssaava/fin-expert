#!/bin/bash

# Build and push Docker image to Docker Hub
# Usage: ./deploy.sh [tag]

# Set default tag if not provided
TAG=${1:-latest}
IMAGE_NAME="finxpert-app"

echo "Building Docker image..."
docker build -t $IMAGE_NAME:$TAG .

echo "Tagging image for Docker Hub..."
# Replace 'yourusername' with your actual Docker Hub username
read -p "Enter your Docker Hub username: " DOCKER_USERNAME
docker tag $IMAGE_NAME:$TAG $DOCKER_USERNAME/$IMAGE_NAME:$TAG

echo "Pushing to Docker Hub..."
docker push $DOCKER_USERNAME/$IMAGE_NAME:$TAG

echo "✅ Successfully pushed $DOCKER_USERNAME/$IMAGE_NAME:$TAG to Docker Hub!"
echo "You can now pull and run the image with:"
echo "docker run -p 3000:80 $DOCKER_USERNAME/$IMAGE_NAME:$TAG"
