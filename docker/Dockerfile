# Use an official Ubuntu image as the base image
FROM ubuntu:20.04

# Update the package list and upgrade the installed packages
RUN apt-get update && apt-get upgrade -y

# Install the necessary packages
RUN apt-get install -y nano=4.8-1ubuntu1

# Set the working directory
WORKDIR /app

# Copy the application code to the working directory
COPY . .

# Specify the command to run when the container starts
CMD [ "/bin/bash" ]
