# 1.4 JWT known threats

## Weak signature and insufficient Signature validation

Design flaws of some libraries and applications have led to the following attacks:

- The `alg` property in the JOSE header can be changed to `none` by an attacker, and the badly designed libraries or application will trust this `none` value and consider the token valid without checking the signature. 
  
- An `RS256` alg value can be changed to `HS256` and some weak libraries will try to validate the signature using the RSA public key as the HMAC shared secret.

## Weak Symmetric Keys 

Using a weak symmetric key for HS256 signature can open the door to offline brute-force or dictionary attacks.

## Incorrect Composition of Encryption and Signature 

Some libraries that decrypt a JWE-encrypted Token to obtain a JWS-signed object do not go further and validate the internal signature.

## Insecure use of Elliptic Curve Encryption

Several JOSE fail to validate their inputs correctly when using ECDH-ES algorithm. An attacked can send JWE of its choosing that uses invalid curve points and observe the cleartext output resulting from decryption with the invalid curve points to recover the recipient's private key.

## Multiplicity of JSON Encodings 

Previous obsolete JSON formats allowed several character encodings : UTF-8, UTF-16, and UTF-32. Today, only UTF-8 is allowed.

Attackers use this ambiguity between both implementations to bypass the recipient's validation checks.

## Substitution Attacks 

An attacker can use a legit JWT that was initially intended for a resource A and will attempt to use the same JWT for a different resource B. If such situations are not caught, this can result to attackers to successfully gain access to resources that it is not entitled to access.

## Indirect Attacks on the server 

Many JWT claims are used by the recipient to perform lookup operations in databases and LDAP. Any of these claims can be used by attackers as vector for injection attacks or server-side request forgery attacks.


Source: [RFC-8725](https://www.rfc-editor.org/rfc/rfc8725.html)