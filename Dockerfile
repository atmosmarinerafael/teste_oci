FROM node

WORKDIR /src/usr

COPY . .

EXPOSE 80

RUN npm i

CMD [ "npm", "start" ]