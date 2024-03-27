---
layout: presentation
type: talk
categories: talks
time: 4:20 pm
startTime: 2024-05-14T16:20
length: 20
day: 2
group: 6
spot: 2
location: frist
speakers:
- steve-meyer
speakers-text: Steve Meyer, ,
title: "Think Big, Act Localhost: using large scale data techniques at smaller scales for ad hoc data analysis"
---
Even the largest libraries generally do not work with data that would qualify as Big Data, such as the log data represented by Google searches or Facebook posts. That puts some libraries in a bit of a bind, what we might call a "Medium Data" problem. The catalog data of a larger library, measured at the scale of a many millions of records, is interesting enough to be the subject of intra-data set analysis, but large enough that it can exceed the simple programming and scripting techniques used for ad hoc analysis.

This talk will present intermediate level programming techniques for working in this intermediary space between larger infrastructure projects and ad hoc, experimental computer programming. It will discuss strategies for how simple scripts that do not utilize databases or search indices can still process millions of records efficiently. The canonical example used to illustrate these techniques will be a simple FRBRization clustering algorithm for approximately 10 million MARC records. FRBR, or Functional Requirements for Bibliographic Records, specifies a model in which multiple instances of the same work, such as the print, electronic and microform copies of the same title, can be clustered together as a single unit.
