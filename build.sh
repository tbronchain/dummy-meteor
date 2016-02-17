#!/bin/bash

PROJECT="mymeteor"

# Create project
meteor create $PROJECT

# Run meteor (in background)
meteor &

# Add bootstrap
meteor add twbs:bootstrap

