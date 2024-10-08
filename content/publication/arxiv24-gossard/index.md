---
title: "Spin Detection Using Racket Bounce Sounds in Table Tennis"

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here 
# and it will be replaced with their full name and linked to their profile.
authors:
- Thomas Gossard
- Julian Schmalzl
- Andreas Ziegler
- Andreas Zell

# Author notes (optional)
author_notes:
- "Equal contribution"
- "Equal contribution"

date: "2024-09-18T00:00:00Z"
doi: "10.48550/arXiv.2409.11760"


# Schedule page publish date (NOT publication's date).
publishDate: "2024-09-18T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["3"]

# Publication name and optional abbreviated publication name.
publication: In *arXiv*
publication_short: In *arXiv*

abstract: While table tennis players primarily rely on visual cues, sound provides valuable information. The sound generated when the ball strikes the racket can assist in predicting the ball's trajectory, especially in determining the spin. While professional players can distinguish spin through these auditory cues, they often go unnoticed by untrained players. In this paper, we demonstrate that different rackets produce distinct sounds, which can be used to identify the racket type. In addition, we show that the sound generated by the racket can indicate whether spin was applied to the ball, or not. To achieve this, we created a comprehensive dataset featuring bounce sounds from 10 racket configurations, each applying various spins to the ball. To achieve millisecond level temporal accuracy, we first detect high frequency peaks that may correspond to table tennis ball bounces. We then refine these results using a CNN based classifier that accurately predicts both the type of racket used and whether spin was applied.

# Summary. An optional shortened abstract.
#summary: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis posuere tellus ac convallis placerat. Proin tincidunt magna sed ex sollicitudin condimentum.

tags: ["Robotics", "Table Tennis Robot", "Sound Detection"]

# Display this page in the Featured widget?
featured: true

# Custom links (uncomment lines below)
# links:
# - name: Custom Link
#   url: http://example.org

url_pdf: 'https://arxiv.org/pdf/2409.11760'
url_code: ''
url_dataset: ''
url_poster: ''
url_project: ''
url_slides: ''
url_source: ''
url_video: ''

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

