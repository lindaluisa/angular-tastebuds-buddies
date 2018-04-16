import { Component, OnInit, Input } from '@angular/core';

import { Dish } from '../../dishes.model'; // type Dish

@Component({
  selector: 'app-dishes-item',
  templateUrl: './dishes-item.component.html',
  styleUrls: ['./dishes-item.component.css']
})

export class DishesItemComponent  implements OnInit {
  @Input() dish: Dish;
  @Input() index: number;

  ngOnInit() {
  }

}
