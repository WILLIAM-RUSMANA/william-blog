---
title: "Week 6 Journal - Vulnerbility Mapping"
category: "Ethical Hacking Course With Sir Kalpin"
date: "01/04/2026"
---

After enumeration comes mapping vulnerabilities — systematically identifying weaknesses in the discovered systems.
<br>

Types of Vulnerabilities:

Design Vulnerabilities — flaws in the software or protocol specification itself
Implementation Vulnerabilities — bugs in the code (error handling, exceptions, input validation)
Operational Vulnerabilities — misconfigurations in how a system is deployed or managed
<br>

Local vs. Remote Vulnerabilities:


Local — requires physical or authenticated access; often used for privilege escalation
Remote — exploitable from the network without local access; higher risk
<br>


Vulnerability Mapping Tools:


OpenVAS — free, open-source vulnerability scanner
Nessus — commercial scanner, widely used in enterprise environments
W3af — web application attack and audit framework (free)
Sqlmap — automated SQL injection detection and exploitation (free)
Acunetix / Fortify — commercial web application scanners
Metasploit — exploitation framework (commercial, with a free community version)
Burp Suite — web proxy for intercepting and analyzing HTTP traffic (free and pro versions)


Web Application Analysis introduced a structured approach to understanding an application's attack surface: mapping core functionality, identifying input entry points (URL parameters, POST data, cookies, HTTP headers), and fingerprinting server-side technologies through banner grabbing, file extensions (.php, .asp, .jsp), directory names, and session token names (e.g., PHPSESSID, JSESSIONID).

Risk Classification — after finding vulnerabilities, each is rated High / Medium / Low to help management prioritize remediation. The results are presented in a vulnerability map tied to a risk matrix.


