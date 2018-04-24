import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { DishService } from '../dishes/dish.service';
import { Dish } from '../dishes/dishes.model';

@Injectable()
export class DataService {
  constructor(private http: Http, private dishService: DishService) {}

    storeDishes() {
      return this.http.put('https://tastebuds-buddies.firebaseio.com/dishes.json', this.dishService.getDishes());
  }

  getDemDishes() {
    this.http.get('https://tastebuds-buddies.firebaseio.com/dishes.json')
    .subscribe(
      (response: Response) => {
        const dishes: Dish[] = response.json();
        this.dishService.setDishes(dishes);
      }
    );
  }
}