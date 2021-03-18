# build stage
FROM node:lts as build-stage
ARG  mode
WORKDIR /app
COPY package*.json ./
COPY yarn.lock ./
RUN yarn
COPY . . 
RUN echo Argument is $mode
RUN if [ "$mode" = "homol" ] ; then yarn build-homol ; else yarn build; fi

# nginx stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html/
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]