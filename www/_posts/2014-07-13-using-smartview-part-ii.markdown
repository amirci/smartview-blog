---
layout: post
title: "Using SmartView - Part II"
date: 2014-07-04 19:39:46 -0500
comments: true
categories: [Agile, Management, ALM, SmartView]
---

In my [last post]({% post_url 2014-07-03-using-smartview-part-i %}) I explained the basics of using [SmartView](http://smartviewapp.com) to create a new project and add _User Stories_ to a _Story Map_.

Now that we have stories in our _Story Map_, we are going to learn how to create releases and prioritize our work.

<!-- more -->

## Planning _Releases_

In my last post, I copied over the _User Activities_ and _User Tasks_ into _Groups_ and _Subgroups_ to create the _Story Map_.

After signing in into the application we can see the project index, which shows we have some stories in the _Planning_ section.

{% img /images/sv_p2/index_planning.png %}

Now is the time to create and assign releases.

### The _Ice Box_

When we look at the _Story Map_ we can see all the stories have been assigned by default to the _Ice Box_ release.

The _Ice Box_ is the release to use when you are unsure where to put a _User Story_. By default it is the only release created for a project. You can tell it is selected because it is highlighted in orange.

{% img /images/sv_p2/story_map_on_ice.png %}

You can also tell that a story is assigned to a release by looking at the top right corner of the story. In this case you will see the _cute_ ice cube and the code to identify the release: _ICE_.

{% img /images/sv_p2/story_on_ice.png %}

Now we’ll learn how to change the release of a story.

### Release management

By using the menu in the top left corner <span class="fa-stack"><i class="fa fa-square fa-stack-2x"></i><i class="fa fa-th fa-inverse fa-stack-1x"></i></span> we can access the _Releases_ page.

{% img /images/sv_p2/releases_menu.png %}

The _Releases_ page shows all the releases created for the project that are in progress or completed. So far we have only one release in progress(the default one) and zero completed.

I will create two more releases so I can assign _User Stories_ and start working on them.

{% img /images/sv_p2/new_Releases.png %}

Each release has a _Tag_ to identify it when looking at _User Stories_ or working with the _Story Map_.

I choose the code _MIN_ for the first minimal release and _FCY_ for the second, fancier release. (I personally prefer to use meaningful codes but if you find R1, R2, etc. clearer feel free to use them.)

### Assigning releases to stories

Going back to the _Story Map_ view, we can tell the that the releases have been added because in the top right corner the release toolbar now shows three releases: ICE, MIN and FCY.

{% img /images/sv_p2/releases_toolbar.png %}

Before we start with the release assignment I want to make sure we are not filtering using the current release (I will explain why in a bit). To do so, I will turn on the filter to _Show all releases_.

{% img /images/sv_p2/show_all_releases_filter.png %}

To assign a _Release_ to a _User Story_ we just need to drag the release to the story and drop it.

{% img /images/sv_p2/assign_release.png %}

You can see that the release changed because, instead of showing _ICE_, the story shows _MIN_ or _FCY_ in the top right corner beside the _Release_ <i class='fa fa-code-fork'></i> icon.

### Now you see me, now you don't

Though looking at all the releases at once can be useful, most of the time you will probably want to work with just one release at a time. 

The _Releases_ toolbar not only lets us assign releases to stories but also works as a filter to select which release is showing in the _Story Map_.

Unless the _Show all releases_ filter is selected (you can tell because the <i class='fa fa-filter'></i> icon is highlighted) the selected release dictates which stories are displayed on the _Story Map_.

Using the _MIN_ release filter, the _Story Map_ view changes to show only those stories.

{% img /images/sv_p2/release_min_filter.png %}

For the _FCY_ release we get similar results.

{% img /images/sv_p2/release_fcy_filter.png %}

Take note that the _Organize Email Group_ folder changes to show the amount of stories in each release.

### What's next?

In the next post in the series we will explore how to start working with the stories, assign them to the _Backlog_ and use the _Kanban Board_ to manage workflow.

In the meantime feel free to take advantage of the interactive guides that come with _SmartView_ to learn, in a series of steps, all the other functionalities that the application has to offer.

To access the _Guides_ just move your mouse to the bottom left corner and click the <i class='fa fa-book'></i> icon inside the orange speech bubble.

{% img /images/sv_p1/guides.png %}

