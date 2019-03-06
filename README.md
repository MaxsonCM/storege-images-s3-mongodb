# UPLOAD IMAGES, STORE ON AWS S3 AND REGISTER ON MONGODB

[Video Example](https://www.youtube.com/watch?v=MkkbUfcZUZM)

## HOW TO INSTALL AND EXECUTE THE PROJECT

**What you will need ?**

* [Nodejs](https://nodejs.org/en/)
* [MongoDB](https://www.mongodb.com/download-center/community)
* [Git (to copy the project)](https://git-scm.com/)
* [copy of the project](https://github.com/MaxsonCM/storege-images-s3-mongodb)

With Git installed run the code below in the terminal

```bash
git clone https://github.com/MaxsonCM/storege-images-s3-mongodb.git
```
**After copying the project and installation of Node Js from the terminal `into the project folder` and run the following command:**

Install yarn:
```js
npm install -g yarn node-env-run
```

Install dependencies:
```
yarn
```

## Configure 

Environment variables:
```
copy .env.example .env
```
- by default the storage will be done locally

## Running

Run server:
```
yarn dev
```

Then access the example in the browser in http://localhost:3000


## How to use AWS S3 

- Create a new bucket on AWS named uploads or any other name but you will need to change the `.env` on the property below:
```js
AWS_BUCKET=uploads
```
- To configure S3 edit the .env file in the properties: 

```js
STORAGE_TYPE=s3
AWS_ACCESS_KEY_ID=//your AWS_ACCESS_KEY_ID here
AWS_SECRET_ACCESS_KEY=//your AWS_SECRET_ACCESS_KEY here
AWS_DEFAULT_REGION=//your AWS_DEFAULT_REGION here
```
**Set the bucket to be read from anywhere.**