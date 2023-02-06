# Use the latest version of the Alpine Linux image as the base image
FROM node:latest

# Set environment variables for the non-root user
ENV HOME /home/node
ENV NODE_USER node
ENV UID 1000

# Create a non-root user with a specified UID
RUN adduser -u $UID $NODE_USER

# Set the working directory to the non-root user's home directory
WORKDIR $HOME

# Set the user for subsequent commands to the non-root user
USER $NODE_USER

# Install the latest version of npm
RUN npm install -g npm@latest

# Set the default command to run when the container starts
CMD ["node"] 
