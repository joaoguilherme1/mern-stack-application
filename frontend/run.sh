#! /bin/bash

echo "####"
echo "####"
echo "####"
echo "Building frontend image Tagged as frontend_mern"
echo "####"
echo "####"
echo "####"
docker build -t frontend_mern .
echo "####"
echo "####"
echo "####"
echo "Running frontend with open port 3000"
echo "####"
echo "####"
echo "####"
docker run -p 3000:3000 frontend_mern