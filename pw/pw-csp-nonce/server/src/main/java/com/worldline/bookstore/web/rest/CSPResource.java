package com.worldline.bookstore.web.rest;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.security.SecureRandom;
import java.util.Collections;

import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.codec.Hex;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

//import com.codahale.metrics.annotation.Timed;

/**
 * REST controller for managing Content-Security-Policy confuguration with
 * random nonce.
 */
@RestController
@RequestMapping("/api")
public class CSPResource {

    // public CSPwrapper test = CSPwrapper();
    private final Logger log = LoggerFactory.getLogger(CSPResource.class);

    /** Used for Script Nonce */
    private SecureRandom prng = null;

    @GetMapping("/csp")
    // Add Script Nonce CSP Policy
    public ResponseEntity<?> generateCSP(HttpServletResponse response) {
        // --Get its digest
        MessageDigest sha;
        // --Generate a random number
        String randomNum;
        try {
            this.prng = SecureRandom.getInstance("SHA1PRNG");
            randomNum = new Integer(this.prng.nextInt()).toString();
            sha = MessageDigest.getInstance("SHA-1");
        } catch (NoSuchAlgorithmException e) {
            return new ResponseEntity<>(Collections.singletonMap("CSPException", e.getLocalizedMessage()),
                    HttpStatus.INTERNAL_SERVER_ERROR);
        }

        byte[] digest = sha.digest(randomNum.getBytes());

        // --Encode it into HEXA
        char[] scriptNonce = Hex.encode(digest);

        String csp = "script-src" +
                " 'unsafe-eval' 'strict-dynamic' " +
                " 'nonce-" + String.valueOf(scriptNonce) + "'" +
                " 'sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4='" +
                // SRI hashes for
                // https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js (work only
                // for Chrome)
                ";" +
                // add connect-src directive to adapt CSP over cross-origin requests (CORS)
                "connect-src" +
                " http://localhost:8080 http://localhost:4200 ws://localhost:4200"
                + ";" +
                " style-src" +
                " 'self' 'unsafe-inline'" +
                ";" +
                " font-src" +
                " 'self' " +
                ";" +
                " img-src" +
                " 'self' data:" +
                ";" +
                " child-src" +
                " 'self' " +
                ";" +
                " object-src" +
                " 'none' " +
                ";" +
                " default-src" +
                " 'self' ";

        CSP conf = new CSP(csp);
        conf.setNonce(String.valueOf(scriptNonce));

        log.debug(conf.toString());

        return ResponseEntity.ok(conf);
    }

}

/*
 * package com.worldline.bookstore.web.rest;
 * 
 * import java.security.MessageDigest;
 * import java.security.NoSuchAlgorithmException;
 * import java.security.SecureRandom;
 * import java.util.Collections;
 * 
 * import javax.servlet.http.HttpServletResponse;
 * 
 * import org.slf4j.Logger;
 * import org.slf4j.LoggerFactory;
 * import org.springframework.http.HttpStatus;
 * import org.springframework.http.ResponseEntity;
 * import org.springframework.security.crypto.codec.Hex;
 * import org.springframework.web.bind.annotation.GetMapping;
 * import org.springframework.web.bind.annotation.RequestMapping;
 * import org.springframework.web.bind.annotation.RestController;
 */

// import com.codahale.metrics.annotation.Timed;

/**
 * REST controller for managing Content-Security-Policy confuguration with
 * random nonce.
 */
/*
 * @RestController
 * 
 * @RequestMapping("/api")
 * public class CSPResource {
 * 
 * }
 */