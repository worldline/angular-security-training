import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './services/userService';
import { CspConfig } from './services/cspConfigService';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html',
  providers: [],
})

export class AppComponent {
  private csp: string = "";
  private nonce: string = "";
  private modifiedNonce: string = "";

  constructor(
    private router: Router,
    public userService: UserService,
    public cspConfig: CspConfig) {

    cspConfig.load().then(
      data => {

        this.csp = data['value'];
        //this.nonce = data['nonce'];
        this.nonce = "z";

        console.debug('csp : ' + this.csp);
        console.debug('nonce : ' + this.nonce);
        console.debug('modified nonce : ' + this.modifiedNonce);

        // can't use the Meta#addTags() method to set CSP because it will insert the meta tag too late, so we add it "manually"
        var meta = "<meta http-equiv=\"Content-Security-Policy\" content=\"" + this.csp + "\">";
        this.renderHtml(meta, 'head');
        console.log('content-security-policy meta  : ' + meta);

        // Add secure inline scripting (a script block with a nonce)
        // The script will just render a message at the bottom of the page
        // (here, we don't use document.write method otherwise it will replace the whole page rendering)
        var yourHtmlString = // nonce='" + this.nonce + "'
          "<script>" +
          "document.getElementsByTagName('body')[0].appendChild(" +
          "document.createRange().createContextualFragment(" +
          "'<h1>Inline scripting is <b>not recommended</b>! But if you have not the choice, <b>secure your app with CSP</b></h1>'));</script>";
        this.renderHtml(yourHtmlString, 'head');
        console.log('inline scripting !!! ', yourHtmlString);
      });
  }

  /**
   *	
   *	Renders an html portion inside a given html tag
   *	@param message: a string which represents the html portion to render in the page
   *	@param parentTag : the html tag name in which the html portion will be inserted as a first child
   */
  private renderHtml(message: string, parentTag: string) {
    var fragment = document.createRange().createContextualFragment(message);
    document.getElementsByTagName(parentTag)[0].appendChild(fragment);
  }

  logout() {
    this.userService.logout();
  }
}

/*
export class AppComponent {
  constructor(private router: Router, public userService: UserService) {}

  logout() {
    this.userService.logout();
  }
}
*/