import { Component, OnInit } from '@angular/core';
import { faAward } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.css']
})
export class AwardsComponent implements OnInit {
  faAward = faAward;

  constructor() { }

  ngOnInit() {
  }

}
