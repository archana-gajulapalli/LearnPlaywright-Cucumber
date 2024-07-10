# LearnPlaywright-Cucumber#
inastll the playwright :
```
 npm init playwright
```
 inastall cucumber-js:
 ```
 npm install @cucumber/cucumber
 npx cucumber-js
```
 insatll dotenv and cross.env:
 ```
 npm install dotenv  
 npm install cross-env
```
 insatll chai for asserions:
 ``` 
 npm install chai
```
 configure the environment variables by creating the .env file in the root of your project
 ```
 BASE_URL=https://www.example.com/
 HEADLESS=false
 BROWSER=chromium
```
 update the pakage.json to use cross-env:
 ```
     "test:dev:chromium": "cross-env NODE_ENV=development BROWSER=chromium cucumber-js --tags @smoke",
         "test:dev:firefox": "cross-env NODE_ENV=development BROWSER=firefox cucumber-js --tags @smoke",
             "test:dev:webkit": "cross-env NODE_ENV=development BROWSER=webkit cucumber-js --tags @smoke",
```
 //to run the tests use the following command 
 ```
 npm run test:dev:firefox
 npm run test:dev:chromium
 npm run test:dev:webkit
 ```


 