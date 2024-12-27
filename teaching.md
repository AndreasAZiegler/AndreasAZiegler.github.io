---
author: Andreas Ziegler
title: "A guideline on doing your thesis within the table-tennis robot lab"
institute: "Cognitive Systems Group, University of Tübingen"
layout: teaching
colorlinks: true
---

## Introduction

In this document, we provide you some information that will hopefully help you to better navigatoe yourself at the start and during your thesis with us.

## Register your thesis

You will find the application form for the BSc/MSc thesis [here](/pdfs/teaching/Anmeldung_Abschlussarbeit_2014-05-02.docx). We ask you to fill it out. You can send it to us as a PDF file, so that we can print it out at the university or you can print it on your own. It's up to you.

To get your PC and desk ready, we ask you to additionally fill out [this form](/pdfs/teaching/new_member_v2.11.odt).

## Supervision

To guide you through your thesis, help you with problems, and give you feedback, we will meet once per week (at Sand and/or on Zoom). In order to benefit from the meeting as much as possible, we ask you to send us your weekly progress report until **6pm the day before the meeting**. We ask you to include...
* your name
* the title of your thesis
* the number/week of the progress report
* a summary of what you have done since the last time we met
* the next step you plan to do
* questions you have
* references, if you mentioned any literature

in your progress report. You can use [this template](https://github.com/AndreasAZiegler/progress-report-template) or use something else. This way, your supervisor(s) are able to prepare for the meeting which saves time during the meeting and results in better answers for you. At first sight, this may seem a bit daunting, but it will help you during your thesis.

### Communication

We use [Discord](https://discord.com/) to communicate within the group. We will send you a link to our Discord server and will also create a channel for your thesis.

We **strongly** recommend you asking questions via Discord rather than waiting one week for the next meeting.

## Scientific working

Working scientifically is a bit different compared to other jobs and might seems a bit overwhelming in the beginning. To make your life a bit easier, we provide you with some resources.

### Project management

To keep an overview of all your tasks, a Kanban board like [Trello](https://trello.com) could be helpful to keep track of what is planned to do, what you are currently working on and what is done.

Although more targeted towards Machine Learning projects, this [video](https://www.youtube.com/watch?v=1NcluUFDwxo&t=67s) has some useful insights.

### Scientific reading

If you don't hae a starting point or a paper yet, use kewords based search. Useful search engines are: [Google  Scholar](https://scholar.google.com) and [Semantic Scholar](https://www.semanticscholar.org/).

If you found an interesting paper, you can find newer papers that cite this paper on [Google  Scholar](https://scholar.google.com) by "clicking" on "Cited by".

For finding older papers cited by a paper, read the related work section. Often (but not always), closely related works are cited in the last paragraph of the related work section.

In [How to read a Paper](/pdfs/teaching/HowToReadAPaper.pdf) it is explained, how to read papers in order to save you time during your literature review. Another great resource is [this video from Andrew Ng](https://youtu.be/733m6qBH-jI).

A guide about how to start with a whole literature review provides [this video](https://www.youtube.com/watch?v=8oEOa9wStjk).

One more hint: After you read a paper, **make a short summary**. This could be a couple of sentences or a whole paragraph. If you don't do this, chances are high, that you have to re-read the paper when you write the related work section in your thesis. Reading a paper just once and writing a summary saves a considerable amount of time.

### Scientific writing

Your report will be an important part of your thesis. Don't start too late with writing. Experience shows that most people aren't able to write several pages of academic content per day. Another fact ist that like many other things, you will get better with writing with doing it. We recommend you to take the weekly progress report as an opportunity to frequently write down, visualize and present your results, ideas and/or problems. You will anyway have to present it to us in some way and copying content from the weekly progress report over to your thesis is easier than writing it in your thesis from scratch. Depending on your topic, starting with your report four weeks before submission is a good point of time. You can start with the introducttion, related work and work in parallel on your experiments.

#### Some general scientific writing advice

If you make claims, back it up with scientific literature (papers) or results from your experiments.

Every figure, table, pseudo-code you add in your report should be mentioned and cited in the text.

The caption (the text under the figure) should be self-containing. In other words, when a reader just looks at the figure and reads the caption, he/she/they should be able to understand it, without reading the report.

Treat equations as part of the text. Meaning that you can place the final "." (dot) after the equation.

#### Using LaTeX

**Citing with LaTeX:** Use `~\cite{}` to avoid line breaks before your cite. The same goes for `~\cref{}`.

**Some useful packages:**

Cleveref has the advantage that it will automatically add the type of content you are referencing. Therefore, it can save you quite some typing. Use it with: `\usepackage{cleveref}`, `~\cref{}`

Acronym allows you an easy handling of acronyms. Use it with `\usepackage{acronym}`,

```
\begin{acronym}
    \acro{NN}[NN]{Neural Network}
    \acro{MSE}[MSE]{Mean Squared Error}
\end{acronym}
```

By default, the first time an acronym is used, the full version is written together with the abbreviation. Later on, only the abbreviation is used. For normal usage `\ac{NN}`, to write the full name `\acf{NN}`, to write plural `\acp{NN}`, to write the full name in plural `\acfp{NN}`.

### Presentation

The presentation is also really important. Here focus on your results/achievements. Keep preliminaries short. It is 30-35 min plus discussion. The professor wants people to speak free not memorize text. Assume that the professor has the same knowledge as you, right before you started your thesis. Don't use acronyms in your presentation which are only used in the very recent literature.

Make sure all your slides (except the title slide) have number on the bottom. 

### Tools

#### Git

Chances are very high, that you will have to write some code/scripts during your thesis. We highly recommend you to make use of our [GitLab server](https://gitlab.cs.uni-tuebingen.de/) and get comfortable with using [git](https://git-scm.com/) as a versining control system. You will need to invest some time but it will pay off, either if you need to recreate an old experiment or if you accitentally deleted some files. Feel free to also use git for your report.

 We can help with code if necessary, but only if it is on the git

#### Editor / IDE

If you haven't already found your favorit text editor or IDE, [Visual Studio Code](https://code.visualstudio.com/) seems to be a good candiate. Easy to use, supporting many languages, many available plugins and good community support.

#### Programming

If you are new to C++, this [modern C++ course might be for you](https://youtu.be/3HpcY9N0F7I?si=Te0TBxuscxFA_HfK).

If you are not familiar with the Linux terminal, shell tools and scripting, git, etc. [The Missing Semester of Your CS Education](https://missing.csail.mit.edu/) might be for you.

#### Code style guide

Either use the [Google code style guide](https://google.github.io/styleguide/) or the [ROS code style guide](http://wiki.ros.org/StyleGuide).

#### Zotero

To keep an overview of your papers, add notes/remarks we highly recommend you [Zotero](https://www.zotero.org/).
