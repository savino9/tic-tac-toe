# FeedbackFruits assessment: Tic Tac Toe App

## First day approaching Ember.js

As soon as I’ve received the instructions for the assessment I was feeling super excited: 
I found something that I’ve never used before such as Emberjs. 

I like new challenge, I see this as an opportunity to learn something new. 
I’m always happy to learn new framework, programming language etc. however this is part of a developer’s life! :)

## First approach with the documentation:

As a good developer, you need to take your time to go through the official documentation, that’s always the best way to understand foudamentals and start playing with something new.
I’ve immediately recognise that everything it’s clear and well structured; good examples that you can follow and see results in no time.

## Things that I’ve noticed about Ember:

- *Easy to install:*

With Node.js already installed you can just run
```$ npm install -g ember-cli``` 
in order to get the Ember Command line interface installed globally into your machine.

- The use of *Handlebars syntax*, as reported in documentation: 
“Anything that is valid Handlebars syntax is valid Ember syntax.”

That’s very nice, I’ve build already small applications using Handlebars, Ejs, Pugjs,Bootstrap and Foundation. Of course the last two that I’ve just mentioned are not template engine.

- How fast and easy is to *create ember app*, it’s only one line of code in your terminal:
```$ ember new app-name```

- Add *Materialize* it’s also very easy:

```$ npm install``` materialize-css@next
make sure to import the necessary CDN.

## Things that I found difficult:

It took me a while to figure how to implement the logic for the game and what would be the best approach. 
The solution that I've implemented it's not perfect but it works, having more time I would like to improve some of the missing/broken features:

- the machine player it's based on random number: I would like to implement that with a smarter algorithm

- use Ember.observer instead of MutationObserver (“Don't use observers if possible  ember/no-observers”)

- adding the score feature