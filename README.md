# practice-react-slow-webapi

Test your skills with *react* and web applications, try blurring the slowness of the web api

This repo is part of the project *code-practice*
https://github.com/code-practice-organization/code-practice

## Description

The owner of the site calls you and asks you for help! The site is unusable, it's slow, the user experience is very bad!
You can't change the backend, you have to do what you can by modifying the frontend to improve the user experience and limit the boredom of waiting for results!

The list of posts is waiting a lot, there are no loaders or waiting messages. When you press a detail you don't know if you have pressed or not ... and the more you click the slower the site!

## How use this repository

1. fork the repo in your github account
2. clone the repo in your pc, then
  - [start the webapi](#start-webapi)  
  - [run the react app](#run-react-app)  
3. edit the app as best you can
4. push the changes on your repo
5. open a PR to original repo (if you want a review or feedback)
6. share your result with your friends or collegues!

## Start webapi

install dotnet runtine, if you don't have it
https://docs.microsoft.com/en-us/dotnet/core/install/


from repo root folder, run this command
```shell
slow-dotnet-core-webapi\simple-dotnet-core-webapi.exe
```

## Endpoints to call

- Get Posts
https://localhost:5001/api/posts

- Get Categories
https://localhost:5001/api/categories

- Get Tags
https://localhost:5001/api/tags

### Configure slow rate

From the dotnet configuration file you can change the slowdown parameter. By default it is 25

slow-dotnet-core-webapi\appsettings.json

```json
"settings": {
    "slowRate": 5
  }
```

### About Data from webapi

The data in webapi are random, is generate with Faker. So don't expect deterministic data, for example once id 1 has a title, time after another.

## React App

Very simple and raw react app for the goal. You can improve as you want. Design, programming and so on. :)

### Run react app

from repo root folder, run this commands
```shell
cd react-app

npm i

npm run start
```

