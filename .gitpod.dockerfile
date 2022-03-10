FROM gitpod/workspace-gitpod

RUN nvm install --lts=Fermium && nvm use --lts=Fermium
RUN npm i -g npm
