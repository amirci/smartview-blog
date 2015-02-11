---
layout: post
title: "Using SmartView - Part I"
date: 2014-07-03 15:21:40 -0500
comments: true
categories: [Agile, Management, ALM, SmartView]
---

Not so long ago I wrote a [post]({% post_url 2014-04-06-an-owners-journey %}) about a [lean project management tool](http://smartviewapp.com) that I have been working on for the past year and a half.

We are about to release the _open beta_ and start collecting feedback before our official release.

Though you can sign up and try it out on your own, a bit of help is never amiss. Here is the first installment in a series of posts to explain the basic steps for using _SmartView_.

<!--more-->

## Working with your project

First of all we need a project to work with. Right now the project index will show that we have no projects. We can remedy that situation easily by creating a new one.

{% img /images/sv_p1/empty_index.png %}

Let's use a fictitious email client application called __Spamzilla__ to serve as an example.

Following the _create project_ link will lead us to a form where we can enter the project name and start date.

Once the project is created, the _project index_ shows __Spamzilla__ as the only project so far with the progress at zero. When you have more projects you will be able to see the progress for all of them.

{% img /images/sv_p1/project_index_zero.png %}

### Setting up the _Story Map_

If you already have a _Story Map_ that you are using with your team it is very easy to transfer all the information to _SmartView_. If you don't, please follow [Steve Rogalsky's](http://winnipegagilist.blogspot.ca/2012/03/how-to-create-user-story-map.html) post to start (you won't regret it, and yes, __Spamzilla__ is inspired by his example). 

The _Story Map_ that we have on our wall would look like this:

{% img /images/sv_p1/story_map_wall.png %}

But our _Story Map_ so far is empty:

{% img /images/sv_p1/empty_story_map.png %}

However, copying over the information is straightforward.

### Creating _Groups_ and _Subgroups_

In a typical _Story Map_ we have _User Activities_ and _User Tasks_. But in _SmartView_, these are called _Groups_ and _Subgroups_, respectively.

For each of the _User Activities_ in the _Story Map_ we will create a _Group_.

{% img /images/sv_p1/groups.png %}

The _Groups_ are represented as folders (<i class='fa fa-folder fa-2x'></i>) and the selected _Group_ looks like an open folder highlighted in orange (<i class='fa fa-folder-open fa-2x orange'></i>).

Now for each of the _User Tasks_ in the _Story Map_ we will create a matching _Subgroup_. Here is the example for _Organize Email_ (the first _User Activity_/_Group_).

{% img /images/sv_p1/subgroups.png %}

### Adding _User Stories_

The next step is to load the stories into each _Group_. The <i class="fa fa-cog"></i> icon displays the menu for the _Subgroup_ and you can choose the <i class='fa fa-plus'></i> to add a new _User Story_.
 
When you finish adding a story you can choose the <i class='fa fa-check'></i> icon to save it or the <i class='fa fa-plus'></i> icon to save it and add another. The <i class='fa fa-plus'></i> icon may come in handy as you can add multiple stories without having to go back to the menu.

{% img /images/sv_p1/adding_stories.png %}

### What's next?

In the next post in the series we will explore how to assign releases, choose priorities and start building our backlog.

In the meantime feel free to take advantage of the interactive guides that come with _SmartView_ to learn, in a series of steps, all the other functionalities that the application has to offer.

To access the _Guides_ just move your mouse to the bottom left corner and click the <i class='fa fa-book'></i> icon inside the orange speech bubble.

{% img /images/sv_p1/guides.png %}

