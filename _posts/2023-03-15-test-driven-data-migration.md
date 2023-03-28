---
layout: presentation
type: talk
categories: talks
time: 1:50 PM
startTime: 2023-03-15T13:50
length: 10
day: 1
group: 2
spot: 2
location: frist
room: mpr
speakers:
- tyler-nathaniel-wade
speaker-text: Tyler Nathaniel Wade
title: "Test-Driven Data Migration"
---
At Princeton University Library, we are migrating research data collections from a legacy DSpace instance to our newly constructed Princeton Data Commons suite of applications. This includes migrating metadata from modified Dublin Core to DataCite. Our goal is to improve the discovery and reuse of our open research data.  We are using a technique we like to call test-driven data migration. By leveraging strategies from test-driven development, we surface the origins of inconsistent metadata and build a virtuous cycle between metadata creation and use. We create artifacts we can use to engage in iterative feedback loops with our stakeholders and with the broader research data ecosystem.  This involves identifying representative samples from the collection that is to be migrated and writing Rspec system tests that simulate a cataloger using our newly developed DataCite cataloging interface. We then validate both the cataloging process and the resultant record with stakeholders. We also incorporate the record into other software development value streams.  This presentation will show our new cataloging interface and some of the tests we are using, and we will discuss how writing our tests first improved the overall migration process. 
