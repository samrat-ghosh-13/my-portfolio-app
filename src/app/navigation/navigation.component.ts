import { Component, OnInit, ElementRef } from "@angular/core";

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.css"],
  host: {
    "(document:click)": "onClick($event)"
  }
})
export class NavigationComponent implements OnInit {
  ngOnInit() {}

  netImage: any = "../../assets/samrat.jpg";
  collapsed = true;
  constructor() {}

  onButtonClick() {
    this.collapsed = !this.collapsed;
  }
}
