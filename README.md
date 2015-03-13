# smartview-blog
Blog for SmartView app. It's built with [Octopress](https://github.com/octopress/octopress) 3.0.

## Setup

Just execute

```sh
  $ bundle
```

## Creating a post

```sh
  $ bundle exec octopress new post "My Title"
```

## Preview

If you execute:

```sh
  $ bundle exec jekyll s
```

This will start a server at http://localhost:4000.

Also you can run:

```sh
  bundle exec jekyll build
```
to generate the site on */public* folder

## Deploy

The project is configured to build the site on heroku, it's not necesary build the site before a deploy. 
Just commit the changes to heroku, i.e run:

```sh
  git add . # Add all the changes made to the site, e.g a new post added
  git commit -m "site updated"
  git push heroku master
```
