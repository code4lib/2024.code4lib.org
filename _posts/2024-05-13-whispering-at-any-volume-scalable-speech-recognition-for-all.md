---
layout: presentation
type: talk
categories: talks
time: 3:15 pm
startTime: 2024-05-13T15:15
length: 20
day: 1
group: 2
spot: 1
location: frist
speakers:
- owen-c-king
- ryan-harpo-harbert
speaker-text: Owen C. King, Ryan "Harpo" Harbert, 
title: "Whispering at any volume: Scalable speech recognition for all"
---
The American Archive of Public Broadcasting (AAPB) preserves and hosts over 150k audiovisual resources, with over 100k records available publicly. A collaboration between the Library of Congress and GBH (WGBH Boston), the collection spans over 100 years of media history.

Accurate transcripts remain critical for content discovery and accessibility, especially with such an extensive catalog. In September 2022, OpenAI released Whisper, a speech recognition model that revolutionized our transcription capabilities.

This presentation compares Whisper models against existing transcription approaches and demonstrates major improvements in accuracy and speed, while significantly reducing computing power. We examine test results across models and compare them to the popular Kaldi speech recognition toolkit, noting significant improvements in operational cost, especially with GPUs. In addition, we highlight Whisper’s multi-language capabilities and discuss common errors and biases.

Throughout, we showcase real-world examples along with source code for operating at multiple scales: starting from a single laptop, horizontally scaling to a group of machines, and vertically scaling to a Kubernetes cluster with GPU nodes. Here, we feature demos from “Chowda”, our new open-source web application for processing large batches of media through Whisper and additional workflow pipelines.
