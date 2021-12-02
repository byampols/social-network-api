# social-network-api

## Description
An API for a social network using a NoSQL database. 

[Github Source Repository](https://github.com/byampols/social-network-api).

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [License](#license)
4. [Contributors](#contributors)
5. [Questions](#questions)

## Installation
* Clone the github repository to your desired location.
* Open the command line, and navigate to the cloned directory. Then type 'npm i' to install the required npm libraries. If node is not installed, please install it before this step.
* Ensure mongoDB is installed
* Type npm start to run the database locally, or deploy the code to MongoDB via Heroku. Deploying to another DB service might require modification to 'server.js'
* The database is now up and running.

## Usage

[Link to a video demonstrating the usage of the code](https://drive.google.com/file/d/1wzgu8-bLbFEBaFeoJ4uVLdLxPdTKuCza/view?usp=sharing)

*  The database will accept calls in the following forms:
* '/api/users'
  * GET, POST
* '/api/users/id' (where 'id' is the id of an existing user)
  * GET, PUT, DELETE
* '/api/users/id/friends/friend-id' (where 'id' is the id of an existing user, and 'friend-id' the id of another existing user)
  * POST, DELETE
* '/api/thoughts'
  * GET, POST
* '/api/thoughts/id' (where 'id' is the id of an existing thought)
  * GET, PUT, DELETE
* '/api/thoughts/reactions/id' (where 'id' is the id of an existing thought)
  * POST
* '/api/thoughts/reactions/id/reaction-id' (where 'id' is the id of an existing thought, and 'reaction-id' is the id of an existing reaction)
  * DELETE


## License

[MIT License](https://opensource.org/licenses/MIT).

## Contributors
* [Ben Yampolsky](github.com/byampols)
* [Express](https://expressjs.com/)
* [MongoDB](https://www.mongodb.com/)
* [Mongoose](https://mongoosejs.com/docs/)
* [validateEmail](https://stackoverflow.com/a/24214767)

## Questions
### [My github profile.](https://github.com/byampols)
### [Email me if you have any questions!](byampols@alumni.cmu.edu)