# 8.4 XSSI Practical Work

![pw](../../assets/pw-coding.png)

1 - Configure protection against JSONP vulnerability:

Add this config in /bookstore/src/main/java/com/worldline/bookstore/config/SecurityConfiguration.java

``` typescript 
      /**
       * Add config to set a prefix on json response to protect against JSONP vulnerability
       * */
      @Bean
      public MappingJackson2HttpMessageConverter mappingJackson2HttpMessageConverter() {
          MappingJackson2HttpMessageConverter converter = new MappingJackson2HttpMessageConverter();
          /**
           * Set the expected prefix for Angular
           * */
          converter.setJsonPrefix(")]}',\n");
          
          /**
           * Trick to solve a lazyloading exception when you use collections in your entities
           * See https://stackoverflow.com/a/21760361
           * */        
          ObjectMapper mapper = new ObjectMapper();
          //Registering Hibernate5Module to support lazy objects
          mapper.registerModule(new Hibernate5Module());
          converter.setObjectMapper(mapper);
                 
          return converter;
      }
```
2 - Test your protection: 

check that json responses are prefixed by the expected token and that there is no repercussion on the GUI (stripped automatically by Angular)