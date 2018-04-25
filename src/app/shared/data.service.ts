import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

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
    .map(
      (response: Response) => {
        const dishes: Dish[] = response.json();
        for (let dish of dishes) {
          if (!dish['ingreds']){
            console.log(dish);
            dish['ingreds'] = [];
          }
        }
        return dishes;
      }
    )
    .subscribe(
      (dishes: Dish[]) => {
        this.dishService.setDishes(dishes);
      }
    );
  }
}