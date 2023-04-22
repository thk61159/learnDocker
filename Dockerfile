FROM node:15
WORKDIR /app 
COPY package.json ./ 
ARG NODE_ENV
# 需要用double quotes變數不然會解讀為字串
RUN if [ "$NODE_ENV" = "development" ];\
        then npm install;\
        else npm install --only=production;\
        fi
# RUN npm install
COPY . ./ 
ENV PORT 3000
EXPOSE $PORT
# EXPOSE 3000
CMD ["node", "app.js"]


