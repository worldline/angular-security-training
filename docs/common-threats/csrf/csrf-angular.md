# 2.1.3 CSRF Protection in Angular 

What are the defense mechanisms against CSRF available in Angular ?

## Built-in prevention

Angular has a built-in CSRF prevention mechanism called cookie-to-header token.

## cookie-to-header workflow

1. The server-side program sends a random CSRF token in a cookie for each request.
2. Angular reads the token from the cookie.
3. Angular sends the cookie in the headers for each request.
4. Server compares the token received from the client.
5. Server decides to verify the action only if the tokens match.

![cookie-to-header](../../assets/cookie-to-header.png)

::: warning
CSRF prevention needs to be implemented in both your server (back-end) side, and your client (front-end) side.

As Angular provides solution as a client, you must investigate your back-end framework in order to generate and handle the random CSRF token.
:::

## Enabling CSRF in Angular

Use HttpClientXsrfModule in the import section of the module where your components are declared.

You can customize the cookie and header name with the withOptions method.

The CSRF module implements the default interceptor HttpXsrfInterceptor.

## Further resources

https://owasp.org/www-community/attacks/csrf