# 1.5 JWT Best Current Practices

The **minimum recommendations** to defend your JWT against the threats mentioned previously are :

## Perform Algorithm Verification

- Enable the caller to specify a supported set of algorithms and do not use any other algorithms when performing cryptographic operations.
- Ensure that the `alg` or `enc` header specifies the same algorithm that is used for the cryptographic operation.
- Each key must be used exactly by one algorithm only.
- Check the key each time the cryptographic operation is performed.

## Use Appropriate Algorithms

- Consider the JWS as invalid if the algorithm is not accepted by the application, even if the JWS can be successfully validated.
- Only allow the use of cryptographically current algorithms that meet the security requirements of the application.
- Design your application to enable cryptographic agility.
- Do not generate or consume tokens using `none` unless explicitly requested by the caller.
- Avoid all RSA-PKCS1 v1.5 encryption algorithm and prefer RSAES-OAEP.
- Use the deterministic approach if you want to implement ECDSA.

## Validate all cryptographic operations

- Reject any cryptographic operation use in JWT if any validation step has failed.
- Validate both outer and inner operations in nested JWT by using the keys and algorithms supplied by the application.

## Ensure Cryptographic Keys have sufficient entropy

- Human-memorizable passwords MUST NOT be directly used as the key to a keyed-MAC algorithm such as "HS256".

## Use UTF-8

- Do not use or allow the use of other Unicode encodings for encoding and decoding JSON used in Header Parameters and JWT Claims.

## Validate the Issuer and Subject

- Reject the JWT if it does not contain the `iss` (issuer) claim.
- Validate the cryptographic keys used for the cryptographic operations in the JWT belong to the issuer.
- Validate that the `sub` (subject) value corresponds to a valid subject and/or issuer-subject pair at the application. Reject the JWT if the issuer, subject, or the pair are invalid.

## Use and Validate Audience

- JWT must contain an `aud` (audience) claim that can be used to determine whether the JWT is being used by an intended party or was substituted by an attacker at an unintended party.
- Validate the audience value and reject the JWT if the audience value is not present or not associated with the recipient.

Source: [RFC-8725](https://www.rfc-editor.org/rfc/rfc8725.html)