FROM node:18.9
WORKDIR /usr/src/index
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 5000
CMD ["npm", "start"]
