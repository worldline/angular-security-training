# 3.1 XSS Overview 

## XSS in a nutshell

Cross-Site Scripting (XSS) is a web application vulnerability that occurs when **untrusted data from the user** is processed by the web application **without validation** and is reflected back to the browser **without encoding or escaping**, resulting in code execution at the browser engine.

![xss-wf](../../assets/xss-wf.png)

## Why XSS is dangerous ?

The impact of XSS is moderate for reflected and DOM XSS, and severe for stored XSS, with remote code execution on the victim’s browser, such as stealing credentials, sessions, MFA bypass, DOM node replacement or defacement (such as trojan login panels), key logging or delivering malware to the victim.

## What causes XSS ?

This attack happens mostly because the web application or API uses inputs from any users within the output it generates without proper validation or encoding.

## How XSS attacks happen ?

| XSS type                  | Description                                                                                                        |  Payload type                  |  Payload Examples | Real cases                                                                                      |
|---------------------------|--------------------------------------------------------------------------------------------------------------------|--------------------------------|-------------------|-------------------------------------------------------------------------------------------------|
| Reflected                 | Reflected in web server as an error message, search result or any input sent to the server as part of the request. | From request parameter.        |![image](https://user-images.githubusercontent.com/1529433/174054218-bef943dc-1f60-4621-ba5f-4d4b10504111.png)|https://www.techspot.com/news/78304-epic-games-weaknesses-check-point-hack-fortnite-accounts.html|
| Stored                    | Injected script is permanently stored in target servers.                                                           | Stored server-side.            | ![image](https://user-images.githubusercontent.com/1529433/174054511-5e9a54ef-5b8c-4b53-907a-644ecd3a147b.png)|https://www.vice.com/en/article/wnjwb4/the-myspace-worm-that-changed-the-internet-forever        |
| DOM based                 | Modifying the DOM environment in the victim browser.                                                               | Introduced by DOM modification.|![image](https://user-images.githubusercontent.com/1529433/174054599-3d7619d8-571c-4ada-9a05-9a7d3f3b5898.png)|https://www.neuralegion.com/blog/dom-based-xss/                                                  |
| Mutation                  | Looks like safe (or just a syntax error) in itself but become active after mutation process                                                                                                                  | Mutated by browser.            | ![image](https://user-images.githubusercontent.com/1529433/174054791-2beee000-a47f-431f-bcac-fba3a6018e43.png)|                                                                                                 |
| Blind Cross-Site scripting| Script is saved on server side and reflected back in the backend application.                                      |                                |                   |https://samcurry.net/cracking-my-windshield-and-earning-10000-on-the-tesla-bug-bounty-program/   |
