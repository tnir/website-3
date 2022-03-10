FROM gitpod/workspace-node:latest

RUN  nvm install --lts=Fermium && nvm use --lts=Fermium && npm i -g npm
