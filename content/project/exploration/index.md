---
title: A Representation for Exploration that is Robust to State Estimate Drift
summary: The goal of this thesis was to develop a (map) representation for exploration that is robust to state estimate drift.
tags:
- Robotics
- Mapping
- Localization
- Exploration
- Planning
date: "2018-04-30T00:00:00Z"

# Optional external URL for project (replaces project detail page).
external_link: ""

image:
  caption: 
  focal_point: Smart

links:
#- icon: twitter
#  icon_pack: fab
#  name: Follow
#  url: https://twitter.com/georgecushen
url_code: ""
url_pdf: "/pdf/Thesis-MT.pdf"
url_slides: ""
url_video: ""

# Slides (optional).
#   Associate this project with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides = "example-slides"` references `content/slides/example-slides.md`.
#   Otherwise, set `slides = ""`.
slides: ""
---

## Motivation

Exploration is a fundamental task in the field of robotics. The goal is to build a map of a previously unknown environment. Two tasks have to be performed repeatedly for exploration: mapping the space the robot so far perceived; and planning where to go next. In this thesis we focus on the first task and the goal is to find a map representation that can deal with noisy state estimates. All so far presented map representations either assume perfect state estimates or need to rebuild the map after optimization.

## Approach
To achieve this goal we build our representation with polygons. Our polygons represent the boundary between free known space and occupied space or unknown space and the inside of polygons is implicitly free space. We develop two approaches: The first approach builds a global map with polygons by continuously building the union of the polygon from the current field of view and the polygons of the so far explored space. The second approach works with polygons of the local field of view only. For every local polygon the frontiers, the obstacles and the free space is determined and the robot explores as long frontiers are present in the map.

## Result
In this thesis we propose a novel representation that can deal with noisy state estimates and does not need to rebuild the map or parts of it, e.g. after a loop closure. By experiments we show that we achieve full coverage of the area to explore with frontier-based exploration, using our proposed representation.
