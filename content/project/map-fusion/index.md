---
title: Map Fusion for Collaborative UAV SLAM
summary: The goal of this project was to develop a pipeline to merge maps created by different Unmanned Aerial Vehicles (UAVs) operating in the same area.
tags:
- Computer Vision
- Robotics
- SLAM
- Optimiaztion
date: "2017-03-30T00:00:00Z"

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
url_code: "https://github.com/AndreasAZiegler/MFfCUAVSLAM"
url_pdf: "/pdf/Thesis-SP2.pdf"
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

A correct and accurate common map is crucial for multiple robots to collaboratively performing tasks. In this semester project, an existing multi agent Simultaneous Localisation and Mapping (SLAM) system should be extended to fuse maps of single robots in a way that no false map alignment is guaranteed and that an optimal alignment is achieved by using multiple place matches. Also redundant information, a consequence of the fusion of two maps, should be removed in order to get a good performance of the optimization routines e.g. Bundle Adjustment (BA).

## Approach

To achieve the first goal, a new approach is proposed which uses multiple KeyFrame Matchs (KFMs) to fuse two maps. This proposed approach also use a novel idea to spread the KFMs over a bigger area by skipping KeyFrames (KFs) between the detection of KFMs. To remove redundant information, KF culling is performed after all KFMs were detected and before the main map fusion. This way information which were present in both maps appear only once in the fused map and the Pose Graph Optimization (PGO) and the BA does not have unnecessary data to process. To reduce the runtime of the optimization part (PGO and BA), the usage of Powell’s dog leg (DL) non-linear least squares technique instead of the Levenberg-Marquardt (LM) optimization was evaluated and the system was adapted in a way, that the performance is increased.

## Result

The proposed map fusion approach reduces drift and achieves better accuracy compared to the previous approach. With the implemented KF culling, the number of KFs which the PGO and the BA have to process is decreased significantly and therefore better timing is achieved. The usage of DL non-linear least squares technique reduced the runtime of the optimization furthermore.


