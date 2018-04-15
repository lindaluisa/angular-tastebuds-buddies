import { Component, OnInit } from '@angular/core';

import { Dish } from './dishes.model';
import { DishService } from './dish.service';

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.css'],
  providers: [DishService]
})
export class DishesComponent implements OnInit {
selectedDish: Dish; 

  constructor() { }

  ngOnInit() {
  }

}
