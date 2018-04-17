import { Component, OnInit } from '@angular/core';

import { DishService } from './dish.service';

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.css'],
  providers: [DishService]
})
export class DishesComponent implements OnInit {

// injecting service
  constructor() { }

  ngOnInit() {

  }

}
