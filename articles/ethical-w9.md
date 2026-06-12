---
title: "Week 9 Journal -  Target Exploitation (Metasploit)"
category: "Ethical Hacking Course With Sir Kalpin"
date: "06/05/2026"
---

With vulnerabilities mapped, exploitation is the process of proving they are real and impactful.

Vulnerability Research Skills Required:


Programming (C/C++, Perl, Python, Assembly)
Reverse engineering
Instrumented tools: debuggers, fuzzers, profilers, memory monitors
Understanding exploitability and payload construction


For most pentesters, writing exploits from scratch is not necessary — public exploit databases exist to provide proof-of-concept code:


exploit-db.com (Offensive Security)
securityfocus.com (Bugtraq)
nvd.nist.gov (National Vulnerability Database)
packetstormsecurity.org
exploit-id.com (Indonesian database)


Metasploit Framework is the dominant exploitation toolkit. Key commands in msfconsole:


show exploits — lists all available exploit modules
show payloads — lists payload options
show auxiliary — lists auxiliary modules (scanners, fuzzers, etc.)


Metasploit's value is that it abstracts the complexity of exploit writing — a tester selects a known vulnerability, sets target parameters, chooses a payload (what to run after exploitation), and executes. This dramatically lowers the barrier for practical exploitation during a pentest.
