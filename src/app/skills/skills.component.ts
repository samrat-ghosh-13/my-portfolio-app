import { Component, OnInit } from "@angular/core";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faJsfiddle,
  faNode,
  faAngular,
  faReact,
  faVuejs,
  faNpm,
  faGitAlt,
  faGithub,
  faBootstrap,
  faJira,
  faFreeCodeCamp,
  faBitbucket
} from "@fortawesome/free-brands-svg-icons";

import { faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: "app-skills",
  templateUrl: "./skills.component.html",
  styleUrls: ["./skills.component.css"]
})
export class SkillsComponent implements OnInit {
  faHtml5 = faHtml5;
  faCss3 = faCss3Alt;
  faJs = faJs;
  faJsfiddle = faJsfiddle;
  faNodeJs = faNode;
  faAngular = faAngular;
  faReact = faReact;
  faVuejs = faVuejs;
  faNpm = faNpm;
  faGitAlt = faGitAlt;
  faGithub = faGithub;
  faBootstrap = faBootstrap;
  faJira = faJira;
  faFreeCodeCamp = faFreeCodeCamp;
  faBitbucket = faBitbucket;
  faCheck = faCheck;

  netImage: any = "../../assets/portfolio.jpg";
  netImage1: any = "../../assets/thankIt.png";
  netImage2: any = "../../assets/recipe.jpg";

  constructor() {}

  ngOnInit() {}
}
