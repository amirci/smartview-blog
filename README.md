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

We need to re-build the site and then commit the changes to heroku. So run:

```sh
  bundle exec jekyll build
  git add . # Add all the changes made to the public folder
  git commit -m "site updated"
  git push heroku master
```
