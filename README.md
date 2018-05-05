# Projek website
As the name suggested, this is the website for Projek.

Dev Setup steps:

1. go into app/config/, based on the environment, copy either of these files and rename it to config.js

2. go into build/, rename index_qa.html to index.html

3. run `npm start`

4. visit localhost:3000


Deployment steps:

1. run `npm install`

2. run `npm run build`

3. delete all files from existing public/ folder, and copy the content of /build into /public

4. go into app/config/, based on the environment, copy either of this file and rename it to config.js

5. go into build/, rename index_prod.html to index.html

6. from console, run `node server.js`

7. visit localhost
