#!/bin/bash

# Create directories if they don't exist
mkdir -p public/images/tech
mkdir -p public/images/hobbies

# Download tech stack logos
curl -o public/images/tech/react.svg https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg
curl -o public/images/tech/html5.svg https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg
curl -o public/images/tech/css3.svg https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg
curl -o public/images/tech/javascript.svg https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg
curl -o public/images/tech/bootstrap.svg https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original.svg
curl -o public/images/tech/cpp.svg https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg
curl -o public/images/tech/c.svg https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg
curl -o public/images/tech/typescript.svg https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg
curl -o public/images/tech/sql.svg https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg
curl -o public/images/tech/nodejs.svg https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg
curl -o public/images/tech/python.svg https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg
curl -o public/images/tech/mongodb.svg https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg
curl -o public/images/tech/aws.svg https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original.svg
curl -o public/images/tech/git.svg https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg
curl -o public/images/tech/github.svg https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg
curl -o public/images/tech/docker.svg https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg
curl -o public/images/tech/npm.svg https://raw.githubusercontent.com/devicons/devicon/master/icons/npm/npm-original-wordmark.svg

# Download placeholder hobby images
curl -o public/images/hobbies/poetry.jpg https://source.unsplash.com/400x300/?poetry,writing
curl -o public/images/hobbies/cooking.jpg https://source.unsplash.com/400x300/?cooking,food
curl -o public/images/hobbies/music.jpg https://source.unsplash.com/400x300/?music,instruments 