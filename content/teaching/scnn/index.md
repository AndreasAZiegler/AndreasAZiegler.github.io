---
title: Ball Detection with event-based asynchronous sparse convolutional networks
summary:  The goal of this thesis is to use Asynchronous Sparse Convolutional Layers and apply it in a neural network to detect fast moving table tennis balls in real-time.
tags:
- Robotics
- Computer Vision
- Event Camera
- Deep Learning
date: "2021-02-21T00:00:00Z"

# Optional external URL for project (replaces project detail page).
external_link: "https://uni-tuebingen.de/fakultaeten/mathematisch-naturwissenschaftliche-fakultaet/fachbereiche/informatik/lehrstuehle/kognitive-systeme/teaching/bachelor-theses/#c1698244"

image:
  caption: featured.png
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

Event cameras are bio-inspired sensors that differ from conventional frame cameras: Instead of capturing images at a fixed rate, they asynchronously measure per-pixel brightness changes, and output a stream of events that encode the time, location and sign of the brightness changes. Event cameras offer attractive properties compared to traditional cameras: high temporal resolution (in the order of μs), very high dynamic range (140 dB vs. 60 dB), low power consumption, and high pixel bandwidth (on the order of kHz) resulting in reduced motion blur. Hence, event cameras have a large potential for robotics and computer vision.

So far, most learning approaches applied to event data, convert a batch of events into a tensor and then use conventional CNNs as network. While such approaches achieve state-of-the-art performance, they do not make use of the asynchronous nature of the event data. Spiking Neural Networks (SNNs) on the other hand are bio-inspired networks that can process output from event-based directly. SNNs process information conveyed as temporal spikes rather than numeric values. This makes SNNs an ideal counterpart for event-based cameras.

The goal of this thesis is to investigate and evaluate how a SNN can be used together with our event-based cameras to detect and track table tennis balls. The Cognitive Systems groups has a table tennis robot system, where the developed ball tracker can be used and compared to other methods.

## Requirements

* Familiar with "traditional" Computer Vision
* Deep Learning
* Python
