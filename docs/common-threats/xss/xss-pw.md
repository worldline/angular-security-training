# 3.5 XSS Practical Work

![pw](../../assets/uncle-pw.png)

1 - Render HTML formatting elements in Angular
- in "Home" page, create a "news" with formatted content by using HTML elements like `<b>` and `<i>` . Add links.
Hint : Use `[innerHTML]` attribute to render safe HTML tags
- create a "news" with scripting. What do you observe ? Take a look at the console.

2 - Use DomSanitizer service
- to transform the "Welcome" message (see "Home" page) to a link which displays an alert popup (use `javascript:alert` syntax).
- (Just for the demo, don't do this in a real situation) to sanitize the "newsOfTheDay" content in order to execute some basic and safe scripting based on DOM even listener (onclick, ...) 
    
    
