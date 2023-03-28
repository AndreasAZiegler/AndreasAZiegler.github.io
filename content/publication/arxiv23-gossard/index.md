---
title: "SpinDOE: A ball spin estimation method for table tennis robot"

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here 
# and it will be replaced with their full name and linked to their profile.
authors:
- Thomas Gossard
- Jonas Tebbe
- Andreas Ziegler
- Andreas Zell

# Author notes (optional)
#author_notes:
#- "Equal contribution"
#- "Equal contribution"

date: "2023-03-07T00:00:00Z"
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: "2023-03-07T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["3"]

# Publication name and optional abbreviated publication name.
publication: In *arXiv*
publication_short: In *arXiv*

abstract: Spin plays a considerable role in table tennis, making a shot’s trajectory harder to read and predict. However, the spin is challenging to measure because of the ball’s high velocity and the magnitude of the spin values. Existing methods either require extremely high framerate cameras or are unreliable because they use the ball’s logo, which may not always be visible. Because of this, many table tennis-playing robots ignore the spin, which severely limits their capabilities. This paper proposes an easily implementable and reliable spin estimation method. We developed a dotted-ball orientation estimation (DOE) method, that can then be used to estimate the spin. The dots are first localized on the image using a CNN and then identified using geometric hashing. The spin is finally regressed from the estimated orientations. Using our algorithm, the ball’s orientation can be estimated with a mean error of 2.4&deg; and the spin estimation has an relative error lower than 1%. Spins up to 175 rps are measurable with a camera of 350 fps in real time. Using our method, we generated a dataset of table tennis ball trajectories with position and spin, available on our project page.

# Summary. An optional shortened abstract.
#summary: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis posuere tellus ac convallis placerat. Proin tincidunt magna sed ex sollicitudin condimentum.

tags: ["Robotics", "Table tennis", "Spin estimation", "Real-time"]

# Display this page in the Featured widget?
featured: true

# Custom links (uncomment lines below)
# links:
# - name: Custom Link
#   url: http://example.org

url_pdf: 'https://arxiv.org/pdf/2303.03879.pdf'
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

