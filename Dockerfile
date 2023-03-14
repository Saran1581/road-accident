FROM node:16

WORKDIR /app

COPY package.json ./

COPY ./ ./

RUN npm install

CMD [ "npm", "run", "start" ]

# FROM ngnix:1.19.0

# WORKDIR /usr/share/ngnix/html

# RUN rm -rf -/*

# COPY --from=builder /app/build .

# ENTRYPOINT [ "ngnix", "-g", "daemon off;" ]
