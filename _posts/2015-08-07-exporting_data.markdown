---
layout: post
title: "Exporting stories"
date: 2015-08-07T09:37:43-05:00
categories: [SmartView]
---

At SmartView we thrive to provide integrations with other services.

Still sometimes you may want to export the data to use it with a different service or to present it in a different way.

In Smartview exporting to CSV is really easy.

<!-- more -->

## Exporting releases

One option to export is to use the _Releases_ screen.

{% include _go_to_releases.html %}

On the releases screen you can see export buttons on the _In Progress_ and _Completed_ sections respectively. Each export will take all the stories under those sections (i.e. all the stories from releases in progress or all the stories from completed releases).

{% img /images/sv_releases_export.png %}

The exported file will have a timestamp as part of its name, for example `SmartView-in-progress-20150807144946.csv`.

### CSV format

The file includes the following information on each column:

* Release: Name of the release the story belongs to
* Code: Story id
* Group: Name of the group the story belongs to
* Subgroup: Name of the subgroup the story belongs to
* Story: Text of the story
* CreatedAt: Date when the story was created
* StartedAt: Date when the story was moved to the _Kanban_ board
* FinishedAt: Date when the story was moved to _Done_
* SMT: Story Mapping Time (how long the story spent in the User Story Map)
* LT: Lead Time (lenght of time since the story was added to the _Backlog_ until it was _done_)
* CT: Cycle Time (lenght of time it took a story to move from a _Ready_ phase to a _Done_)
* Labels: Labels of the story separated by comma

For each label one column will be generated with an _1_ or _0_ to indicate if the story has that label or not. This allows easy filtering or conditional coloring.

For example, let's imagine the project we are exporting has four labels `Bug`, `Feature`, `Support` and `Social Media`. Then for a story with labels `Bug` and `Support` the file will contain the following columns with values at the end:

* labels: Bug, Feature, Support, Social Media
* label-bug: 1
* label-feature: 0
* label-support: 1
* label-social-media: 0

## Exporting the history

Similar to the releases option, you can export all the stories in the _History_ into a CSV file.

{% include _go_to_history.html %}

On the history screen there is a button to export to CSV.

{% img /images/sv_history_export.png %}

Pressing the button will export the stories based on the filter you have selected: _weekly_, _monthly_ or _quarterly_.

The format is the same as in exporting releases.