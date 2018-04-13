import { Component, OnInit } from '@angular/core';
import { Dish } from './dishes.model'

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.css']
})
export class DishesComponent implements OnInit {
selectedDish: Dish; 

  constructor() { }

  ngOnInit() {
  }

}
