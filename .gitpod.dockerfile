FROM gitpod/workspace-node

RUN nvm install --lts=Fermium && nvm use --lts=Fermium
RUN npm i -g npm
