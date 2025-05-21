#!/bin/bash

# Create directories if they don't exist
mkdir -p public/images/projects
mkdir -p public/images/profiles
mkdir -p public/images/hobbies

# Copy project images
cp images/projects/* public/images/projects/

# Copy profile images
cp images/profiles/* public/images/profiles/

# Copy hobby images
cp images/hobbies/* public/images/hobbies/

echo "Images copied successfully!" 