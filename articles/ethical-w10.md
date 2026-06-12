---
title: "Week 10 Journal - Privilege Escalation"
category: "Ethical Hacking Course With Sir Kalpin"
date: "22/05/2026"
---


After gaining initial access, the goal is often to escalate privileges — moving from a limited user account to root/administrator.

Types of Privilege Escalation:


Vertical — gaining higher privileges than your current account (e.g., user → admin)
Horizontal — accessing another account at the same privilege level


Escalation Vectors:


Local exploits targeting the OS or kernel
Misconfigurations (e.g., world-readable SSH keys, weak sudo rules)
Weak or reused passwords
Network traffic sniffing to capture credentials
ARP spoofing / man-in-the-middle attacks


Password Attacks — passwords are one of the most common authentication mechanisms, and attacking them is often the most reliable path to escalation.

Authentication factors: something you know (password), something you have (token/card), who you are (biometrics).

Offline Cracking Tools (require access to the hash file):


Hashcat — GPU-accelerated hash cracker
John the Ripper — versatile, supports many hash types
Ophcrack — rainbow table-based Windows password cracker
Rainbow Crack — precomputed hash table attacks
Hash-identifier — determines what type of hash you have
Crunch — custom wordlist generator


Online Cracking Tools (attack live services):


Hydra — supports many protocols (SSH, FTP, HTTP, RDP, etc.)
Medusa — parallel network login auditor
CeWL — scrapes a website to build a custom wordlist


Network Spoofing & Sniffing:


ARP Spoofing — sends fake ARP replies to poison a network's ARP cache, redirecting traffic through the attacker's machine (man-in-the-middle). Tools: Arpspoof, Ettercap, DNSChef
Network Sniffers — capture and analyze packets: Wireshark, Tcpdump, Dsniff