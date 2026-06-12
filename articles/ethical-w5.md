---
title: "Week 5 Journal - Enumerating Targets"
category: "Ethical Hacking Course With Sir Kalpin"
date: "06/04/2026"
---

Enumeration goes beyond discovery — it extracts specific information about users, shares, services, and vulnerabilities from identified hosts.

NetBIOS (Network Basic Input/Output System) is the primary enumeration target on Windows networks. It allows file and printer sharing over LAN, and each computer has a NetBIOS name (up to 16 characters, with the last character identifying the service type). NBTscan scans a range of IPs for NetBIOS info.

NetBIOS Null Sessions — a longstanding Windows vulnerability where an unauthenticated connection can be established and used to extract information. Still present on older systems like Windows XP.

Enumeration commands built into Windows:


nbtstat — displays the NetBIOS name table and can reveal machine name, workgroup, and logged-in users
net view — shows shared resources on a host
net use — connects to shared folders/files


Additional enumeration tools:


NetScanTools Pro — graphical NetBIOS enumeration, verifies UNC path access
DumpSec — dumps shares, user permissions, policies, registry permissions, and services from a Windows machine
Hyena — GUI tool for managing Windows environments; reveals Terminal Services, shares, and user logon names
Nessus — vulnerability scanner that can enumerate NetBIOS names, shared resources, OS versions, OS vulnerabilities, and firewall configurations


Service Enumeration tools: Amap, Httprint, Httsquash, and Ike-scan (for IPsec VPN discovery).

The practical had students enumerate real targets using wpscan (WordPress), jooscan (Joomla), TheHarvester, Google, and Nmap.