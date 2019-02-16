# Play by Play: OWASP Top 10 2017

In the [Play by Play: OWASP Top 10 2017](https://app.pluralsight.com/library/courses/play-by-play-owasp-top-ten-2017) Pluralsight course, you’ll learn the risks that made the 2017 OWASP Top 10 and how best to utilize the OWASP Top 10 in your organization.

> Table of contents
[[toc]]

## Description
Play by Play is a series in which top technologists work through a problem in real time, unrehearsed, and unscripted. In this course, Play by Play: OWASP Top 10 2017, Troy Hunt and Andrew van der Stock discuss the methodology used to construct the 2017 version of the OWASP Top 10. You’ll learn how the analysis of the data collected resulted in a reordering of the risks from the 2013 version, the inclusion of new risks, and the demotion of some risks that were included in previous versions. By the end of this course, you’ll be familiar with each risk and understand how best to use the 2017 OWASP Top 10.

## Introduction

### Introduction

- Hi, I'm Troy Hunt. I am a Pluralsight author who has done a bunch of courses on the OWASP Top 10 before, but today we're going to do the OWASP Top 10 2017 edition, and I'm here with Andrew van der Stock. So Andrew, why don't you tell everyone what do you do because you've got some good insight into this whole OWASP thing.

- Okay, so I'm a Director of the OWASP Foundation. I am also the current connector-leader of the OWASP Top 10 as of about mid-way through last year. I've been looking after the application security verification standard for a number of years, which is a proper standard. We'll talk about that a little bit later. And in my real world, I am a senior principle consultant at Synopsis.

### The History of the OWASP Top 10

- The first edition was in 2003 and has been updated every three years more or less.

### [Changes in the Development of the OWASP Top 10](https://www.owasp.org/index.php/Top_10-2017_Release_Notes)

![](/images/other/owasp-play-by-play-owasp-top-ten-2017/ChangesFrom2013To2017.png)

![](/images/other/owasp-play-by-play-owasp-top-ten-2017/WhatHasBeenDroppedFromTheOwaspTop10.png)

- The main issue we recently have is the extensive use of the new client frameworks like Angular, ReactJs and VueJs and also all the new Serverless staff like the one from Azure, Amazon and Google.

## The OWASP Top 10 2017

### [A1: Injection](https://www.owasp.org/index.php/Top_10-2017_A1-Injection)

![](/images/other/owasp-play-by-play-owasp-top-ten-2017/A1Injection.png)

![](/images/other/owasp-play-by-play-owasp-top-ten-2017/A1Injection2.png)

- Using ORMs like .Net Entity Framework is a good way of avoiding it.

- If it wasn't for NoSQL, it would've be number 4.

### [A2: Broken Authentication](https://www.owasp.org/index.php/Top_10-2017_A2-Broken_Authentication)

![](/images/other/owasp-play-by-play-owasp-top-ten-2017/BrokenAuthentication.png)

![](/images/other/owasp-play-by-play-owasp-top-ten-2017/BrokenAuthentication2.png)

- What we need to probably do is really help users choose better passwords without being like really difficult.
  BrokenAuthentication3

- Check if your email has been pwned using [';--have i been pwned?](https://haveibeenpwned.com/)

![](/images/other/owasp-play-by-play-owasp-top-ten-2017/BrokenAuthentication3.png)

![](/images/other/owasp-play-by-play-owasp-top-ten-2017/BrokenAuthentication4.png)

### [A3: Sensitive Data Exposure](https://www.owasp.org/index.php/Top_10-2017_A3-Sensitive_Data_Exposure)

![](/images/other/owasp-play-by-play-owasp-top-ten-2017/SensitiveDataExposure.png)

![](/images/other/owasp-play-by-play-owasp-top-ten-2017/SensitiveDataExposure2.png)

- The main reason of currectly being at position 3 was the breaches detected in the [Equifax company](https://en.wikipedia.org/wiki/Equifax).

- The fact that you have my phone number or my email address is not sensitive. But in combination say with my home address and say my birthday, that is absolutely sensitive. But the data itself, not important, but the actual combination of those things.

### [A4: XML External Entities (XXE)](<https://www.owasp.org/index.php/Top_10-2017_A4-XML_External_Entities_(XXE)>)

- ![](/images/other/owasp-play-by-play-owasp-top-ten-2017/XmlExternalEntities.png)

- ![](/images/other/owasp-play-by-play-owasp-top-ten-2017/XmlExternalEntities2.png)

- It is a good practice to have a look at [XML External Entity (XXE) Prevention Cheat Sheet](<https://www.owasp.org/index.php/XML_External_Entity_(XXE)_Prevention_Cheat_Sheet>).

- But this is the one it's expected to be gone in 2020 because it's so simple to resolve.

### Employing OWASP ZAP to Exploit XXE

- SCAT: [Source Code Analysis Tools](https://www.owasp.org/index.php/Source_Code_Analysis_Tools)

![](/images/other/owasp-play-by-play-owasp-top-ten-2017/EmployingOwaspZapToExploitXxe.png)

- DAST: [Dynamic Application Security Testing - Category:Vulnerability Scanning Tools](https://www.owasp.org/index.php/Category:Vulnerability_Scanning_Tools)

![](/images/other/owasp-play-by-play-owasp-top-ten-2017/EmployingOwaspZapToExploitXxe2.png)

- The `OWASP ZAP tool` can be downloaded from the [OWASP Zed Attack Proxy Project](https://www.owasp.org/index.php/OWASP_Zed_Attack_Proxy_Project)

![](/images/other/owasp-play-by-play-owasp-top-ten-2017/EmployingOwaspZapToExploitXxe3.png)

![](/images/other/owasp-play-by-play-owasp-top-ten-2017/EmployingOwaspZapToExploitXxe4.png)

- The [OWASP Juice Shop Project](https://www.owasp.org/index.php/OWASP_Juice_Shop_Project) is probably the most modern and sophisticated insecure web application! It can be used in security trainings, awareness demos, CTFs and as a guinea pig for security tools! Juice Shop encompasses vulnerabilities from the entire OWASP Top Ten along with many other security flaws found in real-world applications!

![](/images/other/owasp-play-by-play-owasp-top-ten-2017/EmployingOwaspZapToExploitXxe5.png)

![](/images/other/owasp-play-by-play-owasp-top-ten-2017/EmployingOwaspZapToExploitXxe6.png)

![](/images/other/owasp-play-by-play-owasp-top-ten-2017/EmployingOwaspZapToExploitXxe7.png)

- This became well known in 2014 in developer circles. And, you know, there is a lot of information that was floating around there. They all fixed external entities. They turned it off by default. So if you start a new project, you're not going to have this problem. If you patch your XML processor, particular on. NET, you don't even have to turn it off. It just doesn't do it anymore. And so this is one of those things that if you do those two elements, patch and turn off external entities, you are safe, and it's like 5 minutes.

### [A5: Broken Access Control](https://www.owasp.org/index.php/Top_10-2017_A5-Broken_Access_Control)

![](/images/other/owasp-play-by-play-owasp-top-ten-2017/BrokenAccessControl.png)

![](/images/other/owasp-play-by-play-owasp-top-ten-2017/BrokenAccessControl2.png)

- So we've always had what we call IDOR, which is indirect object references, which is where you can twiddle a value in the URL to get someone else's data. So this would be like change the number. And then you change the number and you get someone else here, which was a lack of access controls on that entity in the database. Exactly. But also you can actually do that for updates as well. You can actually update someone else's profile in many cases

- We can have a look at [Insecure Direct Object Reference Prevention Cheat Sheet](https://www.owasp.org/index.php/Insecure_Direct_Object_Reference_Prevention_Cheat_Sheet) to try to figure out how to prevent the breach related to it.

- However, we also looked at presentation layer access control in the context of model and single page apps and mobile apps because in the old days that was about re-enabling buttons and putting form fields back. Right, yeah. Today, it's about there's an entire admin section of the app that lives on the client. You see it. It's there. How can I use that? Right. So they need to protect against that.

- And yet I was able to act as an administrator without being logged in. I don't think people are testing this often enough.

### [A6: Security Misconfiguration](https://www.owasp.org/index.php/Top_10-2017_A6-Security_Misconfiguration)

![](/images/other/owasp-play-by-play-owasp-top-ten-2017/SecurityMisconfiguration.png)

![](/images/other/owasp-play-by-play-owasp-top-ten-2017/SecurityMisconfiguration2.png)

- So if you've got weak ciphers or, you know, any range of things, we have great tools. And the reason why it slipped is the tools are automatable, and they can be built into CICD. This is helping us get over this issue.

### Integrating Security into the Software Development Lifecycle

- it should just be a standard part of everyone's CICD pipeline to check for dependency checks, to check for SSL problems, to check that your, you know, web. xml or web. com figure's correct. These are simple things that we can really make a huge impact on, and I'm hoping this will go down even further if people take up that advcice

- [RSA ARCHER® PLATFORM](https://www.rsa.com/en-us/products/integrated-risk-management/archer-platform)

![](/images/other/owasp-play-by-play-owasp-top-ten-2017/IntegratingSecurityIntoTheSoftwareDevelopmentLifecycle.png)

- Security has to stop treating themselves as financial audit. We are not financial audit. We have never been financial audit. We must be developers with a security bend.

### [A7: Cross-Site Scripting (XSS)](<https://www.owasp.org/index.php/Top_10-2017_A7-Cross-Site_Scripting_(XSS)>)

![](/images/other/owasp-play-by-play-owasp-top-ten-2017/CrossSiteScripting.png)

![](/images/other/owasp-play-by-play-owasp-top-ten-2017/CrossSiteScripting2.png)

- We can use the [XSS (Cross Site Scripting) Prevention Cheat Sheet](<https://www.owasp.org/index.php/XSS_(Cross_Site_Scripting)_Prevention_Cheat_Sheet>) and [DOM based XSS Prevention Cheat Sheet](https://www.owasp.org/index.php/DOM_based_XSS_Prevention_Cheat_Sheet) web pages to help use avoid these XSS attacks.

- So React. It's a success story because not only to work quickly, you have to use the shadow DOM, which is a React feature. If you don't use a shadow DOM and you're manipulating the DOM by yourself, not only does your app look terrible, it's slow. And one of the great things about that is that they have to use the one function React that allows you to manipulate the DOM by yourself, and it's called dangerouslySetInnerHTML. Right, okay. And that's the one function. And so that by itself means that most React applications are fine as long as you use the templating language they provide. Alright, so this may be another case of people are not getting smarter, but frameworks are getting smarter. Frameworks will save us. It's really good. I'm very happy about this.

### [A8: Insecure Deserialization](https://www.owasp.org/index.php/Top_10-2017_A8-Insecure_Deserialization)

![](/images/other/owasp-play-by-play-owasp-top-ten-2017/InsecureDeserialization.png)

![](/images/other/owasp-play-by-play-owasp-top-ten-2017/InsecureDeserialization2.png)

![](/images/other/owasp-play-by-play-owasp-top-ten-2017/InsecureDeserialization3.png)

![](/images/other/owasp-play-by-play-owasp-top-ten-2017/InsecureDeserialization4.png)

![](/images/other/owasp-play-by-play-owasp-top-ten-2017/InsecureDeserialization5.png)

![](/images/other/owasp-play-by-play-owasp-top-ten-2017/InsecureDeserialization6.png)

![](/images/other/owasp-play-by-play-owasp-top-ten-2017/InsecureDeserialization7.png)

- So what is the prevention mechanism for this? You need to put integrity around your serialized objects. I don't think we can change the pattern of moving state to the client. It's happening already. Too many apps have had that. What we need to do is add a layer of integrity around those objects so they can't be tampered with. Like an HMAC or something like that? Yep, but also they need to care about replay. Does it matter if it's replayed? Right. So to my mind, if you can put some sort of HMAC on the objects you send around and then check the validity of the object type before you unserialize, that would be awesome. But often the act of checking the type deserializes it. 8 position. So it's like it's bad, but not as bad as the other seven things we discussed first.

### [A9: Using Components with Known Vulnerabilities](https://www.owasp.org/index.php/Top_10-2017_A9-Using_Components_with_Known_Vulnerabilities)

![](/images/other/owasp-play-by-play-owasp-top-ten-2017/UsingComponentsWithKnownVulnerabilities.png)

![](/images/other/owasp-play-by-play-owasp-top-ten-2017/UsingComponentsWithKnownVulnerabilities2.png)

- We can use [Retire.js](https://retirejs.github.io/retire.js/) to help us detect use of version with known vulnerabilities.

- Dependency checkers like the OWASP Dependency-Check can actually verify and then, you know, look at your dependencies whether it's Node. js, whether it's JavaScript before you do webpack, whether it's. NET, Java, PHP. If you've got a package manager it supports, it looks up the latest vulnerability databases from NIST and then tries to figure out if what you have is what it sees, and it creates a comparison. And then based upon whether it's vulnerable or outdated, it will provide a different score.

![](/images/other/owasp-play-by-play-owasp-top-ten-2017/UsingComponentsWithKnownVulnerabilities3.png)

- So if there's one thing that I could ask folks to look into as part of A6, which is Security Misconfiguration, is learning about [Content Security Policy (CSP)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP). It helps against cross-site scripting. It helps against, you know, people putting bad things in there. I would certainly suggest learn about CSP. It's probably the most powerful of all the things that's not used today.

### [A10: Insufficient Logging & Monitoring](https://www.owasp.org/index.php/Top_10-2017_A10-Insufficient_Logging%26Monitoring)

![](/images/other/owasp-play-by-play-owasp-top-ten-2017/InsufficientLoggingAndMonitoring.png)

![](/images/other/owasp-play-by-play-owasp-top-ten-2017/InsufficientLoggingAndMonitoring2.png)

- We can follow the [OWASP AppSensor Project](https://www.owasp.org/index.php/OWASP_AppSensor_Project) that offers prescriptive guidance to implement intrusion detection and automated response into applications.

- We generate a lot of logs. So many logs. And if you've got someone there looking at the web server logs, that's not really helpful. What we need to be able to do is say help, I'm under attack and escalate properly, and this is what this is about.

- High-value transactions need to have an audit trail. And if there's sufficient things going on like, say for example, transferring, you know, trillions of dollars of funds in a very short period of time, alarms should be going off. And so all of those bitcoin exchanges that people, you know, it's not just about breaking into a hot wallet and taking all the money.

## The Mossing Risks and the Big Picture

### What Has Been Dropped from the OWASP Top 10?

![](/images/other/owasp-play-by-play-owasp-top-ten-2017/WhatHasBeenDroppedFromTheOwaspTop10.png)

- Frameworks have helped us with both A8 and A10, Cross-Site Request Forgery and Unvalidated Redirects and Forwards. People stopped using Struts. Struts, this is a big deal. A10 was a big deal when Struts was a thing. Spring MVC doesn't have that pattern, and then other languages never had that pattern. There's just no data for it, so it was going to fall out anyway regardless of if we had data-driven Top 10 only for 2017.

### How Best to Use the OWASP Top 10

- The Top 10 really is, it might have an order because of asterisks ranking it, but it's the minimum to avoid negligence. It's not a great standard, it really isn't.

- If you're building software and you don't understand all of this, Yep. then you're probably going to have issues with it. Absolutely. As I said before, it's essentially how to avoid negligence. As a developer, you should actually know all of these things just because you're a software practitioner. You should be aware of the danger points even if you're not familiar with how to fix it. You know oh, this might be a problem. I'm going to go and see someone about that and get the advice you need.
