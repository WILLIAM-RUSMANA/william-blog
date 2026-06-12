---
title: "Week 4 Journal-Target Discovery & Enumerating Targets "
category: "Ethical Hacking Course With Sir Kalpin"
date: "11/03/2026"
---


With information gathered, the next phase is active discovery — confirming what machines exist and what they're running.

Target Discovery Tools for identifying live hosts:


ping, arping, fping, hping, nping — various flavors of host reachability testing
alive6, detect-new-ip6 — for IPv6 environments
nbtscan, passive_discovery — for NetBIOS-based discovery


OS Fingerprinting is the process of determining what operating system a target is running:


Active fingerprinting (Nmap) — sends crafted packets and analyzes responses. Fast but detectable.
Passive fingerprinting (P0f) — listens to traffic without sending packets. Slower but stealthy.


The session then went deep into TCP/IP fundamentals — essential knowledge for understanding what port scanning actually does. The TCP three-way handshake (SYN → SYN/ACK → ACK) and teardown process (FIN/ACK exchange) were explained. TCP is reliable (uses sequence numbers, retransmits lost packets); UDP is connectionless and best-effort.

Port Scanning logic: an open port means a service is listening. By probing ports and analyzing responses, a tester can map the attack surface. TCP scan responses include SYN/ACK (open), RST/ACK (closed), ICMP unreachable (filtered), or silence (filtered/dropped).

Key scanning tools: Nmap (the industry standard, with TCP/UDP scan modes, timing options, output formats), Zenmap (GUI for Nmap), Unicornscan, and Amap.