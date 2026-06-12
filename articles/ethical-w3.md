---
title: "Week 3 Journal - Utilizing Search Engines for OSINT"
category: "Ethical Hacking Course With Sir Kalpin"
date: "20/02/2026"
---

This session moved from manual tools to automated intelligence harvesters, all native to Kali Linux.

TheHarvester is a powerful command-line tool that collects emails, usernames, hostnames, and subdomains from public sources including Google, Bing, LinkedIn, Shodan, and PGP key servers. It is one of the most practical OSINT tools for the reconnaissance phase.

Metagoofil targets document metadata. It searches Google for file types (PDFs, Word docs, spreadsheets, presentations) on a target domain, downloads them, and extracts metadata — revealing usernames, software versions, and internal server names that the organization never intended to share publicly.

Maltego is the standout tool of this week — a visual intelligence and forensics application. It maps relationships between entities: people, domains, DNS names, net blocks, social profiles, and companies. Its real power is in revealing connections that aren't obvious when looking at data in isolation. It uses "Palettes" — Infrastructure, Pentesting, Personal, and Wireless — each designed for a specific reconnaissance context.

The core lesson: search engines are powerful weapons in the hands of a tester (and attacker). Organizations leak far more than they realize through documents, metadata, and public profiles.

