import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listCount: number;
  btnAdd: string = 'Add item';
  goalText: string = '';
  goals = [];

  constructor() { }

  ngOnInit() {
    this.listCount = this.goals.length;
  }

  addGoal (){
    this.goals.push(this.goalText);
    this.goalText = '';
    this.listCount = this.goals.length;
  }

}
