FROM node:18-alpine

WORKDIR /medplum

COPY package*.json ./

COPY . .

RUN npm ci

RUN npm run build:fast

CMD ["npm", "run", "dev"]