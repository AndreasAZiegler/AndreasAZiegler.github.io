---
title: "Detection of Fast-Moving Objects with Neuromorphic Hardware"

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here 
# and it will be replaced with their full name and linked to their profile.
authors:
- Andreas Ziegler
- Karl Vetter
- Thomas Gossard
- Jonas Tebbe
- Sebastian Otte
- Andreas Zell

# Author notes (optional)
#author_notes:
#- "Equal contribution"
#- "Equal contribution"

date: "2024-03-28T00:00:00Z"
doi: "10.48550/arXiv.2403.10677"

# Schedule page publish date (NOT publication's date).
publishDate: "2024-09-26T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["3"]

# Publication name and optional abbreviated publication name.
publication: In *arXiv*
publication_short: In *arXiv*

abstract: Neuromorphic Computing (NC) and Spiking Neural Networks (SNNs) in particular are often viewed as the next generation of Neural Networks (NNs). NC is a novel bio-inspired paradigm for energy efficient neural computation, often relying on SNNs in which neurons communicate via spikes in a sparse, event-based manner. This communication via spikes can be exploited by neuromorphic hardware implementations very effectively and results in a drastic reductions of power consumption and latency in contrast to regular GPU-based NNs. In recent years, neuromorphic hardware has become more accessible, and the support of learning frameworks has improved. However, available hardware is partially still experimental, and it is not transparent what these solutions are effectively capable of, how they integrate into real-world robotics applications, and how they realistically benefit energy efficiency and latency. In this work, we provide the robotics research community with an overview of what is possible with SNNs on neuromorphic hardware focusing on real-time processing. We introduce a benchmark of three popular neuromorphic hardware devices for the task of event-based object detection. Moreover, we show that an SNN on a neuromorphic hardware is able to run in a challenging table tennis robot setup in real-time.

# Summary. An optional shortened abstract.
#summary: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis posuere tellus ac convallis placerat. Proin tincidunt magna sed ex sollicitudin condimentum.

tags: ["Robotics", "Event-based Computer Vision", "SNN"]

# Display this page in the Featured widget?
featured: true

# Custom links (uncomment lines below)
# links:
# - name: Custom Link
#   url: http://example.org

url_pdf: 'https://arxiv.org/pdf/2403.10677.pdf'
url_code: ''
url_dataset: ''
url_poster: ''
url_project: 'https://cogsys-tuebingen.github.io/snn-edge-benchmark/'
url_slides: ''
url_source: ''
url_video: 'https://youtu.be/ir711NZOS2Q'

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
image:
  caption: 
  focal_point: ""
  preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
projects:
#- event-simulator

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: ""
---

