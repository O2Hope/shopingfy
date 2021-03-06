import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger} from '@angular/animations'
import { GoalsService } from '../services/goals.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [

    trigger('goals', [
      transition('* => *', [

        query(':enter', style({ opacity: 0 }), {optional: true}),

        query(':enter', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
            style({opacity: 1, transform: 'translateY(0)',     offset: 1.0}),
          ]))]), {optional: true}),

          query(':leave', stagger('300ms', [
            animate('.6s ease-in', keyframes([
              style({opacity: 1, transform: 'translateY(0)', offset: 0}),
              style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
              style({opacity: 0, transform: 'translateY(-75%)',     offset: 1.0}),
            ]))]), {optional: true})
      ])
    ])

  ]
})
export class HomeComponent implements OnInit {

  listCount: number;
  btnAdd: string = 'Add item';
  goalText: string = '';
  goals = [];

  constructor(private  _data: GoalsService) { }

  ngOnInit() {
    this._data.goal.subscribe(res => this.goals = res);
    this.getActualItems();
    this._data.changeGoal(this.goals);
  }

  addGoal (){
    this.goals.push(this.goalText);
    this.goalText = '';
    this.getActualItems();
    this._data.changeGoal(this.goals);

  }

  removeGoal (i){
    this.goals.splice(i, 1);
    this._data.changeGoal(this.goals);
    this.getActualItems();

  }

  getActualItems(){
    this.listCount = this.goals.length;
  }

}
