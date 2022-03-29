# XSSI Overview

A JSON vulnerability allows third party website to turn your JSON resource URL into JSONP request under some conditions.
Exposed when a GET request is made to retrieve JSON information as an array.
Combined to a CSRF attack. 

## How XSSI works ?

1. Cross-domain HTTP requests is possible via the `src` attribute of `<script>` tag
1. Your browser sends your credential automatically
1. Returning a JSON array is valid as the source for a JavaScript `<script>` tag
1. JavaScript allows us to redefine the Array constructor

TO_DO exploit sample

