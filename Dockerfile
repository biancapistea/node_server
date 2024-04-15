From node:latest

Copy . /src
Workdir /src
run npm install
expose 3000
cmd npm run start


