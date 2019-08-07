import { Component, OnInit } from "@angular/core";
import {
  faFacebookF,
  faTwitter,
  faLinkedin,
  faGithub, 
  faMediumM
} from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"]
})
export class AboutComponent implements OnInit {
  faFacebookF = faFacebookF;
  faTwitter = faTwitter;
  faLinkedin = faLinkedin;
  faGithub = faGithub;
  faMedium = faMediumM;

  constructor() {}

  ngOnInit() {}
}
