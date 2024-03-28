---
speakers-text: Natasha Allen, David Fulmer, Margaret Kelly, Monique Rio
speakers:
- natasha-allen
- david-fulmer
- margaret-kelly
- monique-rio
-
-
type: poster
categories: posters
location: TBD
startTime: 2024-05-14T15:30
time: 3:30 pm
layout: presentation
title: Programmatically Processing OCLC Cross Reference Files
---
The University of Michigan Library needed a way to process the thousands of lines in Bibliographic Cross Reference files from OCLC produced as part of the data sync process. The Bibliographic Cross Reference files contain the local system control number (LSN) and the new OCLC control number (OCN) from matched records in WorldCat. An application was needed to go through each line, process the data, create reports, and, if needed, edit the bibliographic record in the repository. There was also a desire to update the bibliographic record with supplementary information from WorldCat not included in the Bibliographic Cross Reference files in some cases. This poster illustrates an application built by the Automation, Indexing, and Metadata department. Programming in Ruby, collaborating in GitHub, containerizing with Docker, and connecting with the Alma API and the WorldCat Search API, this application makes processing the Bibliographic Cross Reference files a snap.
