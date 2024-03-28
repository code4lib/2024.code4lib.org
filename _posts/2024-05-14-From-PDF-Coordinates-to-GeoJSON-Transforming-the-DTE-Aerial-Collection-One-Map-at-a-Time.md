---
speakers-text: Maria Nuccilli, Shannon McDermitt
speakers:
- maria-nuccilli
- shannon-mcdermitt
-
-
-
-
type: poster
categories: posters
location: TBD
startTime: 2024-05-14T15:30
time: 3:30 pm
layout: presentation
title: From PDF Coordinates to GeoJSON&#58; Transforming the DTE Aerial Collection, One Map at a Time
---
In 2022, Wayne State University Libraries began migrating 50,000 digital collection items to OCLC’s CONTENTdm, moving from an in-house system unable to ingest new items since 2018 due to eroding support structures. However, switching to a vendor system meant that we had to finally modernize one of our most used (and most outdated) collections, the map-based DTE Aerial Photo Collection. Despite its popularity with researchers, DTE Aerial relied on increasingly obsolete browser technology, and after 20 years of stagnation was only accessible using Firefox. Using a workflow developed in 2019 by students at the University of Michigan’s School of Information, we migrated the high-volume collection of PDFs from a local server to Google Cloud Platform for ease of access, reviewed and adapted the legacy code by updating packages (PyPDF2), and implemented a system to batch process the PDFs and troubleshoot errors. This updated workflow allowed us to generate JPGs and transform the geographic coordinates from points on a PDF map to GeoJSON, and finally into usable metadata. From there, we were able to ingest the aerial images into CONTENTdm, create usable maps with Leaflet, and ultimately ensure the viability of this important collection for years to come.
