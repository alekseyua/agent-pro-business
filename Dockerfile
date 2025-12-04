FROM node:18 AS build
WORKDIR /app
# COPY .yarn ./
COPY .yarnrc.yml ./
COPY package.json yarn.lock ./
COPY .yarn /app/.yarn
RUN yarn install --frozen-lockfile

COPY . .
RUN yarn build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "deamon off;"]