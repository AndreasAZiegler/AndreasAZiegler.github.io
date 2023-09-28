---
title: "eWand: A calibration framework for wide baseline frame-based and event-based camera systems"

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here 
# and it will be replaced with their full name and linked to their profile.
authors:
- Thomas Gossard
- Andreas Ziegler
- Levin Komar
- Jonas Tebbe
- Andreas Zell

# Author notes (optional)
author_notes:
- "Equal contribution"
- "Equal contribution"

date: "2023-09-22T07:51:17Z"
doi: "https://doi.org/10.48550/arXiv.2309.12685"

# Schedule page publish date (NOT publication's date).
publishDate: "2023-09-23T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["3"]

# Publication name and optional abbreviated publication name.
publication: In *arXiv*
publication_short: In *arXiv*

abstract: Accurate calibration is crucial for using multiple cameras to triangulate the position of objects precisely. However, it is also a time-consuming process that needs to be repeated for every displacement of the cameras. The standard approach is to use a printed pattern with known geometry to estimate the intrinsic and extrinsic parameters of the cameras. The same idea can be applied to event-based cameras, though it requires extra work. By using frame reconstruction from events, a printed pattern can be detected. A blinking pattern can also be displayed on a screen. Then, the pattern can be directly detected from the events. Such calibration methods can provide accurate intrinsic calibration for both frame- and event-based cameras. However, using 2D patterns has several limitations for multi-camera extrinsic calibration, with cameras possessing highly different points of view and a wide baseline. The 2D pattern can only be detected from one direction and needs to be of significant size to compensate for its distance to the camera. This makes the extrinsic calibration time-consuming and cumbersome. To overcome these limitations, we propose eWand, a new method that uses blinking LEDs inside opaque spheres instead of a printed or displayed pattern. Our method provides a faster, easier-to-use extrinsic calibration approach that maintains high accuracy for both event- and frame-based cameras.

# Summary. An optional shortened abstract.
#summary: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis posuere tellus ac convallis placerat. Proin tincidunt magna sed ex sollicitudin condimentum.

tags: ["Robotics", "Computer Vision", "Camera calibration"]

# Display this page in the Featured widget?
featured: true

# Custom links (uncomment lines below)
# links:
# - name: Custom Link
#   url: http://example.org

url_pdf: 'https://arxiv.org/pdf/2309.12685.pdf'
url_code: 'https://github.com/cogsys-tuebingen/ewand'
url_dataset: ''
url_poster: ''
url_project: 'https://cogsys-tuebingen.github.io/ewand/'
url_slides: ''
url_source: ''
url_video: 'https://youtu.be/Yd_Bsltdfi4'

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

