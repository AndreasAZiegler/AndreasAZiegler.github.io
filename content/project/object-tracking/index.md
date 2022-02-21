---
title: Robust object tracking in 3D by fusing ultra-wideband and vision
summary: In this semester project a new object tracking approach is proposed. A fusion of Ultra-wideband (UWB) and visual measurements to track an object in 3D by fusing both modalities in a principled manner.
tags:
- Computer Vision
- Object Tracking
- UWB
- Sensor Fusion
- Kalman Filtering
- Tracking
date: "2016-11-02T00:00:00Z"

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
url_code: "https://github.com/AndreasAZiegler/ROTI3DBFUWBAV"
url_pdf: "/pdf/Thesis-SP1.pdf"
url_slides: ""
url_video: "https://youtu.be/5BLik3PDl9M"

# Slides (optional).
#   Associate this project with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides = "example-slides"` references `content/slides/example-slides.md`.
#   Otherwise, set `slides = ""`.
slides: ""
---

## Motivation

Object tracking is an important part for many applications especially for robotic systems interacting with humans. Problem statement Ultra-wideband (UWB) systems as well as vision based object trackers are widely known and used. Both of the systems have their advantages and disadvantages. UWB systems can provide the location of an object in 3D with an accuracy of approximate 10cm whereas vision based object trackers can only provide the location of an object in 2D pixel coordinates but with a more precise accuracy than UWB systems.

## Approach

So why not combine these two sources of information? Exactly this concept should be developed and evaluated in this semester project. The 3D position measured by the UWB system should be fused with the 2D pixel coordinates of a visual object tracker with an Extended Kalman Filter (EKF). A re-detection mechanism for the visual tracker should be implemented in addition to increase the usability as well as the stability of the system.

## Result

The proposed system shows a significantly better accuracy compared with the 3D positions measured by the UWB system. This proof of concept enables to apply this system to a wide range of applications and also allows further extensions.
