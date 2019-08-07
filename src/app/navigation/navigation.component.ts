import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  collapsed = true;

  constructor() { }

  ngOnInit() {
  }

  netImage:any = "../../assets/samrat.jpg";

}
