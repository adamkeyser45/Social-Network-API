# Social Network API
An API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list.

## Description: 
This project is the "back-end" for a social media application. There is no "visual" side to it. It is set up to demonstrate the routes and controllers that would make the appication function.

## Models
This particular application has two models, a User Model and a Thought Model...

* The User Model is for creating a user for the application. To create one, you need to input a username and email address. Any required information that is left out will throw an error message on creation. A USer can also have a list of friends by knowing the friend's ID.
* The Thought Model is what people would consider as "comments." To create a thought, you just need to enter in a body of text as well as the user that created it. Just as the User Model has validation, the Thought model also has validation.
    * Within the Thought Model is another schema, Reactions. Reactions are replies to thoughts, that are stored in a Thought's schema when created.

## Routes and Controllers
The routes necessary for this application require:
* GET all Users and Thoughts, as well as GET a user/thought by ID
* POST, PUT, and DELETE for a Users and Thoughts
* POST and DELETE for reactions and friends

## Dependencies
This application requires the Express.js package to create the routing, and Mongoose package to connect to a MongoDB Database. It uses Moment.js to format time as well. To start the application after installing the NPM packages, type "npm start" in your terminal.

## Video Walktrhough of the Back End
To watch a video walkthrough of the demonstration: [CLICK HERE!](https://github.com/adamkeyser45/mod18challenge/blob/main/assets/mod18challenge-walkthrough.mp4)
