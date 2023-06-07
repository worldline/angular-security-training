# 3.5 XSS Practical Work

![pw](../../assets/pw-coding.png)

Practical Work Web-Application directory : **pw/pw-xss**

1 - Render HTML formatting elements in Angular
- in "Home" page, create a "news" with formatted content by using HTML elements like `<b>` and `<i>` . What do you notice ?
    - Hint : <span style="color:white; background-color:white"> Tags are silently and safety escaped by Angular if you use interpolation {{}} </span>
- Use `[innerHTML]` attribute to render safe HTML tags in home.html . What do you notice ?
    - Hint : <span style="color:white; background-color:white"> html tags are safely executed. </span>
- create a "news" with scripting.( Example `<a href="javascript:alert('XSS!')">click!</a> ` or `<span onclick="alert('XSS!');">test!</span>`) What do you observe ? Take a look at the console.
    - Hint : <span style="color:white; background-color:white"> Scripting is safety escaped and not executed- Angular logs a warning on the client console </span>
    
2 - Use DomSanitizer service
- Transform the "Welcome" message (see "Home" page) to a link which displays an alert popup (use `javascript:alert` syntax).
  - Hint : <span style="color:white; background-color:white"> Check commented lines  for trustedUrl in home.html and home.ts </span>
- (Just for the demo, don't do this in a real situation) Sanitize the "newsOfTheDay" content in order to execute some basic and safe scripting based on DOM even listener (onclick, ...) 
  - Hint : <span style="color:white; background-color:white"> Check commented lines  for bypassSecurityTrustHtml and innerHtml in home.html and home.ts </span>    
    
