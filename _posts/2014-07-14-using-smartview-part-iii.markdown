---
layout: post
title: "Using SmartView - Part III"
date: 2014-07-05 12:09:56 -0500
comments: true
categories: [Agile, Management, ALM, SmartView]
---

In my last two posts we discussed the basics of [SmartView](http://smartviewapp.com) and how to start [using the Story Map]({% post_url 2014-07-03-using-smartview-part-i %}) and [creating releases]({% post_url 2014-07-04-using-smartview-part-ii %}).

With the releases in place it is time to start working on the _Backlog_ and the _Kanban Board_ to view and manage our workflow.

<!-- more -->

## Populating the _Backlog_

Now that we have the stories assigned to releases it is time to start working on them. To do so we need to assign stories to the _Backlog_.

The _Backlog_ is the entrance port to the _Kanban Board_ and contains the stories that have been chosen to start working on immediately.

To move a _User Story_ to the _Backlog_ you can open the _Backlog_ and drag and drop the story into it, or using the story menu you can click on the <i class='fa fa-inbox'></i> icon to send it directly.

Here we see the _Backlog_ with two of the stories already assigned:

{% img /images/sv_p3/sending_to_backlog.png %}

### _Kanban_ workflow

The _Kanban Board_ helps us model the workflow you and your team use to visualize the status and progress of the current stories. 

The first step is to make sure the board reflects the workflow your team uses for software development. Once we model reality then we can focus on how to improve it.

The _Kanban Board_ comes with three phases by default: Ready, Working and Review.

{% img /images/sv_p3/default_kanban.png %}

In order to customize your _Kanban Board_, from the menu <span class="fa-stack"><i class="fa fa-square fa-stack-2x"></i><i class="fa fa-th fa-inverse fa-stack-1x"></i></span> access Settings <i class='fa fa-wrench'></i> and choose Process <i class='fa fa-file-text'></i> to access the _Kanban Board_ workflow.

{% img /images/sv_p3/kanban_default_phases.png %}

_Backlog_ represents the input queue of the stories to start working on and cannot be modified.

_Done_ represents the phase of stories that are completed (completely done, deployed, etc.) and cannot be modified.

All the other phases can be removed, renamed, etc. For this example, I am going to use the workflow that my team uses: Analysis, Working, Review and Deploy.

The final workflow looks like this (I will ignore WIP limits and capacity for now—we will discuss them in the next post in this series):

{% img /images/sv_p3/kanban_workflow.png %}

### Using the board

With the new phases in place using the _Kanban Board_ is just a matter of moving the stories between phases (by dragging and dropping) to show that the story is being worked on and is closer to being completed (or, in our case, _deployed_).

Here we see one story left in the _Backlog_, one in _Analysis_ and one in _Working_.

{% img /images/sv_p3/on_the_board.png %}

### Assigning work

All the team members are listed on the _Kanban Board_. You can see the default people icon <i class='fa fa-user'></i> with a random colour or the picture of the teammate if he chooses to change his profile picture. I do recommend changing profile pictures as soon as possible since it is much easier to identify members of the team with pictures than with just a generic icon.

To assign a story to a team member we can drag and drop the team member into the story. The member will appear assigned to the story in the top right corner.

{% img /images/sv_p3/assigning_resources.png %}

### Following the progress

When a _User Story_ is changed from one phase to another the status is reflected in the _Story Map_ as well, so it is easy to identify which stories are being worked on and what the progress is.

{% img /images/sv_p3/sm_story_progress.png %}

The stories that are assigned to the _Backlog_ will show the _Backlog_ <i class='fa fa-inbox backlog'></i> icon.

The stories that are being worked on show a series of small squares 
<span class='progress'>
  <i class='fa fa-square'></i>
  <i class='fa fa-square'></i>
  <i class='fa fa-square'></i>
  <i class='fa fa-square'></i>
</span>
that represent the phases of the _Kanban Board_ (other than _Done_ and _Backlog_). For each complete phase a green square <i class='fa fa-square green'></i> is shown.

The stories that are completed (done) show a green check mark <i class='fa fa-check-circle green'></i>.

### What's next?

In the next post in the series we will explore how to define the WIP (work in progress) for the board, discuss capacity and take a look at metrics.

In the meantime feel free to take advantage of the interactive guides that come with _SmartView_ to learn, in a series of steps, all the other functionalities that the application has to offer.

To access the _Guides_ just move your mouse to the bottom left corner and click the <i class='fa fa-book'></i> icon inside the orange speech bubble.

{% img /images/sv_p1/guides.png %}
