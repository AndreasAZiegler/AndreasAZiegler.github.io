---
author: Andreas Ziegler
title: "A guideline on doing your thesis/research with me"
institute: "Autonomous Space Robotics Lab (ASRL), University of Toronto"
layout: supervision
colorlinks: true
---

## Introduction

In this document, I provide you some information that will hopefully help you to better navigate yourself at the start and during your thesis/research with me.

## Supervision

To guide you through your thesis, help you with problems, and give you feedback, we will meet once per week (in-person or online). In order to benefit from the meeting as much as possible, I ask you to send us your weekly progress report until **6pm the day before the meeting**. I ask you to include...
* your name
* the title of your thesis
* the number/week of the progress report
* a summary of what you have done since the last time we met
* the next step you plan to do
* questions you have
* references, if you mentioned any literature

in your progress report. You can use [this template](https://github.com/AndreasAZiegler/progress-report-template) or use something else. This way, your supervisor(s) are able to prepare for the meeting which saves time during the meeting and results in better answers for you. At first sight, this may seem a bit daunting, but it will help you during your thesis.

### Communication

I **strongly** recommend you asking questions via Slack rather than waiting one week for the next meeting.

In general I believe there are not really stupid questions. But to get the most out of our time, I suggest you ask Google and/or an LLM before so that we can spend our time on the more specific problems.

I value a supportive working environment and psychological safety is important to me. You can ask me anything, but maybe you will get a no. I try to apply [Nonviolent Communication (NVC)](https://youtu.be/7mdxyYyk2JU) in my everyday life and also at work. However, if I'm too deep in my technical side of my brain, I might forget NVC at times.

## Scientific working

Working scientifically is a bit different compared to other jobs and might seems a bit overwhelming in the beginning. To make your life a bit easier, I provide you with some resources.

### Project management

To keep an overview of all your tasks, a Kanban board like [Trello](https://trello.com) could be helpful to keep track of what is planned to do, what you are currently working on and what is done.

Although more targeted towards Machine Learning projects, this [video](https://www.youtube.com/watch?v=1NcluUFDwxo&t=67s) has some useful insights.

### Scientific reading

If you don't have a starting point or a paper yet, use keywords based search. Useful search engines are: [Google  Scholar](https://scholar.google.com) and [Semantic Scholar](https://www.semanticscholar.org/).

If you found an interesting paper, you can find newer papers that cite this paper on [Google  Scholar](https://scholar.google.com) by "clicking" on "Cited by".

For finding older papers cited by a paper, read the related work section. Often (but not always), closely related works are cited in the last paragraph of the related work section.

In [How to read a Paper](/pdfs/supervision/HowToReadAPaper.pdf) it is explained, how to read papers in order to save you time during your literature review. Another great resource is [this video from Andrew Ng](https://youtu.be/733m6qBH-jI).

A guide about how to start with a whole literature review provides [this video](https://www.youtube.com/watch?v=8oEOa9wStjk).

One more hint: After you read a paper, **make a short summary**. This could be a couple of sentences or a whole paragraph. If you don't do this, chances are high, that you have to re-read the paper when you write the related work section in your thesis. Reading a paper just once and writing a summary saves a considerable amount of time.

### Scientific writing

Your report will be an important part of your thesis. Don't start too late with writing. Experience shows that most people aren't able to write several pages of academic content per day. Another fact is that like many other things, you will get better with writing with doing it. We recommend you to take the weekly progress report as an opportunity to frequently write down, visualize and present your results, ideas and/or problems. You will anyway have to present it to us in some way and copying content from the weekly progress report over to your thesis is easier than writing it in your thesis from scratch. Depending on your topic, starting with your report four weeks before submission is a good point of time. You can start with the introduction, related work and work in parallel on your experiments.

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

Chances are very high, that you will have to write some code/scripts during your thesis. I highly recommend you to make use of [GitHub](https://github.com/) and get comfortable with using [git](https://git-scm.com/) as a versioning control system. You will need to invest some time but it will pay off, either if you need to recreate an old experiment or if you accidentally deleted some files. Feel free to also use git for your report.

I usually don't have time to fix your code, but I will try my best to give you tools that help you with your problem at hand. Also, I will only have a look at your code, if its in a repository and I have access to it.

#### Editor / IDE

If you haven't already found your favorite text editor or IDE, [Visual Studio Code](https://code.visualstudio.com/) seems to be a good candidate. Easy to use, supporting many languages, many available plugins and good community support.

#### Programming

If you are new to C++, this [modern C++ course might be for you](https://youtu.be/3HpcY9N0F7I?si=Te0TBxuscxFA_HfK).

If you are not familiar with the Linux terminal, shell tools and scripting, git, etc. [The Missing Semester of Your CS Education](https://missing.csail.mit.edu/) might be for you.

#### Code style guide

Either use the [Google code style guide](https://google.github.io/styleguide/) or the [ROS code style guide](http://wiki.ros.org/StyleGuide).

#### Zotero

To keep an overview of your papers, add notes/remarks we highly recommend you [Zotero](https://www.zotero.org/).

### Grading

I might or might not have to grade you. Although it's not the official grading template by the university, I find [this guideline](/pdfs/supervision/Master_Thesis_MEP_Grading_Scheme.pdf) by TU Delft quite good.
