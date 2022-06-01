FROM node:14-alpine

WORKDIR /usr/app

COPY package*.json .

RUN npm install --no-audit --no-fund

COPY . .

EXPOSE 3000

CMD ["npm", "start"]