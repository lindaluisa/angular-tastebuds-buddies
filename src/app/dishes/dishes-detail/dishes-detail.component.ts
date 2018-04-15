import { Component, OnInit, Input } from '@angular/core';

import { Dish } from '../dishes.model'
import { DishService } from '../dish.service';

@Component({
  selector: 'app-dishes-detail',
  templateUrl: './dishes-detail.component.html',
  styleUrls: ['./dishes-detail.component.css']
})

export class DishesDetailComponent implements OnInit {
  @Input() dishDetail: Dish;
  constructor(private dishService: DishService) { }

  ngOnInit() {
  }

  onAddToShoppingList() {
    this.dishService.addIngredsToShoppingList(this.dishDetail.ingreds);
  }

}
