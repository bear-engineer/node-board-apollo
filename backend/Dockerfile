FROM node:10
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install -g pm2
RUN npm install

COPY . .
ENV NODE_ENV production

EXPOSE 80

# CMD ["pm2-runtime", "index.js"]
CMD ["npm", "run", "start"]