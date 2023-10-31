---
title: "Real-time event simulation with frame-based cameras"

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here 
# and it will be replaced with their full name and linked to their profile.
authors:
- Andreas Ziegler
- Daniel Teigland
- Jonas Tebbe
- Thomas Gossard
- Andreas Zell

# Author notes (optional)
#author_notes:
#- "Equal contribution"
#- "Equal contribution"

date: "2022-09-10T00:00:00Z"
doi: "10.1109/ICRA48891.2023.10160654"

# Schedule page publish date (NOT publication's date).
publishDate: "2022-12-08T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: In *2023 International Conference on Robotics and Automation (ICRA)*
publication_short: In *ICRA2023*

abstract: Event cameras are becoming increasingly popular in robotics and computer vision due to their beneficial properties, e.g., high temporal resolution, high bandwidth, almost no motion blur, and low power consumption. However, these cameras remain expensive and scarce in the market, making them inaccessible to the majority. Using event simulators minimizes the need for real event cameras to develop novel algorithms. However, due to the computational complexity of the simulation, the event streams of existing simulators cannot be generated in real-time but rather have to be pre-calculated from existing video sequences or pre-rendered and then simulated from a virtual 3D scene. Although these offline generated event streams can be used as training data for learning tasks, all response time dependent applications cannot benefit from these simulators yet, as they still require an actual event camera. This work proposes simulation methods that improve the performance of event simulation by two orders of magnitude (making them real-time capable) while remaining competitive in the quality assessment.

# Summary. An optional shortened abstract.
#summary: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis posuere tellus ac convallis placerat. Proin tincidunt magna sed ex sollicitudin condimentum.

tags: ["Robotics", "Event-based Computer Vision", "Real-time"]

# Display this page in the Featured widget?
featured: true

# Custom links (uncomment lines below)
# links:
# - name: Custom Link
#   url: http://example.org

url_pdf: 'https://arxiv.org/pdf/2209.04634.pdf'
url_code: 'https://github.com/cogsys-tuebingen/event_simulator_ros'
url_dataset: ''
url_poster: 'pdf/icra23-ziegler-poster.pdf'
url_project: 'https://cogsys-tuebingen.github.io/realtime_event_simulator/'
url_slides: ''
url_source: ''
url_video: 'https://youtu.be/WaMx2-yOzcQ'

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

