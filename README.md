# Getting Started Masai Quiz

This application is meant to be a simple webpage which can be used for learning some interview questions around software development

TODO:

- responsive & amazing UI to be made
- save users history of questions submitted
- create content for atleast html, css, js and react categories
- make admin routes to add, update,edit etc all questions
- PWA with caching etc to be made

This project uses:
- Create react app boiler plate
- firebase
- antd
- workbox PWA
- redux

### setup
1. install node on your system
1. install required packages with `npm install`
1. run the application locally `npm run start`
1. for the application to work you need to setup firebase
    - see `.env.example` and rename to `.env` and fill in required information from firebase app
1. you can install firebase cli and use cli tools to deploy firebase rules etc
    - for ex. `firebase deploy --only firestore:rules`