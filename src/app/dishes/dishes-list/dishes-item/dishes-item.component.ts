import { Component, OnInit, Input } from '@angular/core';
import { Dish } from '../../dishes.model'; // type Dish

@Component({
  selector: 'app-dishes-item',
  templateUrl: './dishes-item.component.html',
  styleUrls: ['./dishes-item.component.css']
})

// Dish not defined; bc dish should come from outside
export class DishesItemComponent  implements OnInit {
  @Input() dish: Dish;
  constructor() { }

  ngOnInit() {
  }

}
