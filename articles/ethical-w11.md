---
title: "Week 11 Journal - Maintaining Access"
category: "Ethical Hacking Course With Sir Kalpin"
date: "29/05/2026"
---


Once access is gained, a real attacker (and a thorough pentester) needs to maintain it — because vulnerabilities get patched, systems get rebooted, and sessions time out.

Why Maintaining Access Matters:


Avoids having to re-exploit from scratch
Previous entry points may be patched or hardened after initial access
Saves time in long-term engagements
Important caveat: in penetration testing, backdoors must be documented, disclosed, and removed. Leaving backdoors without client knowledge is unethical and potentially illegal.


Methods for Maintaining Access:

OS Backdoors — inject a backdoor into a running process or install a persistent listener:


Cymothoa — injects shellcode into an existing process: ./cymothoa –p [PID] –s 1 –y [PORT], then accessed via nc –nv [TARGET_IP] [PORT]
Intersect — post-exploitation framework
Meterpreter (Metasploit) — a powerful in-memory backdoor that avoids writing to disk


Tunneling — encapsulating one protocol inside another to bypass firewalls and network controls:


dns2tcp / iodine — tunnels TCP through DNS queries
ptunnel — tunnels through ICMP (ping packets)
proxychains — routes traffic through SOCKS/HTTP proxies
stunnel4 — SSL tunneling
socat / netcat — general-purpose data relay and tunneling


Web-Based Backdoors — for targets where web application access is the entry point:


WeBaCoo — generates a PHP backdoor file; communicated via HTTP cookies
Weevely — generates password-protected PHP backdoors; stealthy communication via HTTP
PHP Meterpreter — generated via msfvenom, provides a full Meterpreter session over HTTP/S