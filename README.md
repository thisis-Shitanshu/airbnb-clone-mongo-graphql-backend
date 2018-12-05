# Backend - Airbnb React Native
- We'll start creating the backend for the Airbnb react native clone app.
- We'll start by creating a simple node prject with Express and Mongo + GraphQL using Docker.

- Adding to directory:
    - root:
        - **package.json**
        - **index.js**
        - **app.js**
        - **Dockerfile**
        - **.babelrc**
        - **docker-container.yml**

1. Install the dependencies we installed.
1. Let's create a simple Express server.
1. Let's start creating the DOckerfile to create a mongo image.
1. Check if express server starts on locally:
    - Need to add the babelrc file.
1. Now lets create the docker-compose file to create the mongo and graphql containers.
1. Now let's see if the containers are working.
    - *docker-compose up*
    - This will download and run the image.

#2 Backend for Airbnb App Clone - GraphQL project structure
- In this section we'll start creatng a basic graphQL project structure with a simple mutation and query.

- Adding to directory:
    - root:
        - **graphql**
            - **mutations**
            - **queries**
            - **types**
        - **models**
        - **src**
            - index.js
            - app.js
        - package.json
        - Dockerfile
        - .babelrc
        - docker-container.yml

1. Let's start by creating directories.
    - The graphQL directory will contain:
        - mutations:
            - Used to make changes from mongo.
        - queries:
            - Used to get data from moongo.
        - types:
            - used to declare the different data types.
1. Add a models directory to store schema.
    - The mongoose models will contain modals which will edfine how details will be stored in mongo db.
1. Edit package.json path to index.js
1. Rename the database. - app.js
1. Add mongo port. - app.js
1. Error: import not recognized:
    - Let's add babel polyfill

