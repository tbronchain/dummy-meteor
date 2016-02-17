#!/bin/bash

PROJECT="mymeteor"

# Create project
meteor create $PROJECT

# Run meteor (in background)
meteor &

# Add bootstrap
meteor add twbs:bootstrap

# Get Mongo stuff: Messages.find().fetch()
# Insert stuff in Mongo: Messages.insert({name: 'Thibault', message: 'Hello World :-)'})
