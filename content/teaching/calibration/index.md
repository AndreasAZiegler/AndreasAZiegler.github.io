---
title: Event-camera, camera and robot arm calibration
summary: The goal of the thesis is to develop new methods which can be used in a calibration toolbox, allowing to calibrate the system in an automatic fashion.
tags:
- Robotics
- Computer Vision
- Event Camera
- Calibration
date: "2021-02-21T00:00:00Z"

# Optional external URL for project (replaces project detail page).
external_link: "https://uni-tuebingen.de/fakultaeten/mathematisch-naturwissenschaftliche-fakultaet/fachbereiche/informatik/lehrstuehle/kognitive-systeme/teaching/bachelor-theses/#c1521857"

image:
  caption: calibration.png
  focal_point: Smart

links:
#- icon: twitter
#  icon_pack: fab
#  name: Follow
#  url: https://twitter.com/georgecushen
url_code: ""
url_pdf: ""
url_slides: ""
url_video: ""

# Slides (optional).
#   Associate this project with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides = "example-slides"` references `content/slides/example-slides.md`.
#   Otherwise, set `slides = ""`.
slides: ""
---

## Description

The cognitive systems group at the University of Tübingen uses a table tennis robot system to conduct research on various topics around robotics, control, computer vision, machine learning and reinforcement learning. So far the system uses up to five cameras for the perception pipeline. Recently, the group added event-based cameras to the sensor suite.

Event cameras are bio-inspired sensors that differ from conventional frame cameras: Instead of capturing images at a fixed rate, they asynchronously measure per-pixel brightness changes, and output a stream of events that encode the time, location and sign of the brightness changes. Event cameras offer attractive properties compared to traditional cameras: high temporal resolution (in the order of μs), very high dynamic range (140 dB vs. 60 dB), low power consumption, and high pixel bandwidth (on the order of kHz) resulting in reduced motion blur. Hence, event cameras have a large potential for robotics and computer vision.

With this new sensors in place, the questions arises, how the whole system should be calibrated. Eye-to-hand (calibration of the camera and the robot arm) and camera calibration is a well studied topic in the literature. However, since event-based cameras are still relatively new, there is only very little literature on event-based camera calibration, especially for eye-to-hand calibration.

In a first step, the student should study the state-of-the-art calibration methods relevant for our table tennis robot system. Based on this, the goal of the thesis is to develop new methods which can be used in a calibration toolbox, allowing to calibrate the system in an automatic fashion.

## Requirements

* Familiar with "traditional" Computer Vision
* C++ and/or Python
