# Dockerfile

# creates a layer from node:16-alpine image
FROM node:16-alpine

# sets an environment variable
ENV PORT 3000

# create & set working directory
RUN mkdir -p /app
WORKDIR /app

# copy source files
COPY . /app

# install dependencies
RUN npm install

# start app
# RUN npm run build

# informs container runtime that the container listens on the specified network ports at runtime
EXPOSE 3000
CMD npm run dev