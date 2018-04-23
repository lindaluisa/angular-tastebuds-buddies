import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { Dish } from '../dishes.model';
import { DishService } from '../dish.service';

@Component({
  selector: 'app-dishes-list',
  templateUrl: './dishes-list.component.html',
  styleUrls: ['./dishes-list.component.css']
})

// stating the type of the array of dishes, namly the created Dish Model
// receiving objects as defined in model; instantiating new object based on Dish class
// calling the constructor; we need to pass the arguments we are expecting in the constructor

export class DishesListComponent implements OnInit, OnDestroy {
dishes: Dish[];
subscription: Subscription;

  constructor(private dishService: DishService,
              private router: Router,
              private route: ActivatedRoute) {}

  ngOnInit() { 
    this.subscription = this.dishService.dishesChanged
    .subscribe(
      (arrDish: Dish[]) => {
        this.dishes = arrDish;
      }
    );
    this.dishes = this.dishService.getDishes();
  }

  onNewDish() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
  
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
