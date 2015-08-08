---
layout: post
title: "Exporting stories"
date: 2015-08-07T09:37:43-05:00
categories: [SmartView]
---

At SmartView we thrive to provide integrations out of the box with other services.

Sometimes however, it may happen that you want to export the data to use it with a different service or to present it in a different way.

Exporting to CSV is really easy, here it is how to do it.

<!-- more -->

## Exporting releases

The first option to export is using the _Releases_ screen.

{% include _go_to_releases.html %}

On the releases screen you can see export buttons on the _In Progress_ and _Completed_ sections respectively. Each export will take all the stories under that sections (i.e. all the stories from releases in progress or all the stories from completed releases).

{% img /images/sv_releases_export.png %}

After you export a file would generated using a timestamp to identify the file, for example `SmartView-in-progress-20150807144946.csv`.

### CSV format

The format of the file includes the following information on each column:

* Release: name of the release the story belongs to
* Code: story id
* Group: name of the group the story belongs to
* Subgroup: name of the subgroup the story belongs to
* Story: text of the story
* CreatedAt: Date when the story was created
* StartedAt: Date when the story was moved to the _Kanban_ board
* FinishedAt: Date when the story was moved to _Done_
* SMT: Story Mapping Time (how long the story spend in the User Story Map)
* LT: Lead Time (how long the story took since was added to the _Backlog_ until it was done)
* CT: Cycle Time (how long the story took to be developed)
* Labels: Labels of the story separated by comma

Then for each label one column will be generated with an _1_ or _0_ to indicate if the story has that label or not. That way filtering or conditional coloring can be applied easily.

For example, let's imagine the project we are exporting has four labels `Bug`, `Feature`, `Support` and `Social Media`. Then for a story with labels `Bug` and `Support` the file will contain the following columns with values at the end:

* labels: Bug, Feature, Support, Social Media
* label-bug: 1
* label-feature: 0
* label-support: 1
* label-social-media: 0

## Exporting the history

Similar to the releases option, when looking at history you can export all the stories into a CSV file.

{% include _go_to_history.html %}

On the history screen you will see a button to export to CSV.

{% img /images/sv_history_export.png %}

Pressing the button will export the stories based on the filter you have selected: _weekly_, _monthly_ or _quarterly_.

The format is the same as in exporting releases.