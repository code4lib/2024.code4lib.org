---
layout: presentation
type: poster
categories: posters
time: 3:30 PM
startTime: 2023-03-16T15:30
length: 30
day: 2
location: Frist Lobby
speaker-text: Seth Erickson, University of California, Santa Barbara
title: "OCFL-Index: an API for accessing OCFL repositories "
---
[OCFL-index](https://github.com/srerickson/ocfl-index) is a project to define and implement a
lightweight http/gRPC-based API for indexing and accessing the contents of OCFL-based repositories.
It can serve content from OCFL storage roots on the local file system or in the cloud. The index
is implemented as a sqlite3 database, however additional database backends are planned. The API is
implemented in Go and client libraries for a variety of programming languages can be auto-generated
using protocol buffer service definitions.  This poster provides an overview of the current project
status, including its goals, design decisions, and recent benchmarks.
