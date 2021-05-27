FROM node:14-alpine

RUN mkdir -p /app \
    && apk add --no-cache git

WORKDIR /app

COPY package.json /app/

RUN /usr/local/bin/npm install --unsafe-perm

COPY . /app/

ENV NODE_ENV=production

RUN /usr/local/bin/npm run build

ENTRYPOINT ["/usr/local/bin/npm"]
CMD ["start"]