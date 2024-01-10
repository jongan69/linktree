# React Links

A simple link tree project developed using react and styled-components and material UI for github pages

To edit background see particle-bg in app.js


Pre-requisites 
Node v16

------

To deploy github page:

1. `git clone`
2. edit links in components (headers and linktree)
3. Edit package.json homepage link to match your github page link
4. `yarn run deploy`
5. `git add .`
6. `git push`

------

To deploy to [IPFS Using Fleek](https://ipfs.io/bafybeiezsw4ri4t54xktqoyirtiytgvz52o6cw6trvmfiz6vn5god7cv4y/hosting/site-deployment/#configuring-the-deployment)

![Fleek IPFS](/Capture.PNG)

Docker Image: `fleek/create-react-app`

Run Command: `yarn && yarn build`

Build Directory: `build`
