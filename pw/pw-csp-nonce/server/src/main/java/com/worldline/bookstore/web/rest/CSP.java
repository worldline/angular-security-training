package com.worldline.bookstore.web.rest;

public class CSP {
  private String value;
  private String nonce;

  public String getNonce() {
    return nonce;
  }

  public void setNonce(String nonce) {
    this.nonce = nonce;
  }

  public CSP(String value) {
    super();
    this.value = value;
  }

  public String getValue() {
    return value;
  }

  public void setValue(String value) {
    this.value = value;
  }

  @Override
  public String toString() {
    return "CSP [value=" + value + ", nonce=" + nonce + "]";
  }
}
