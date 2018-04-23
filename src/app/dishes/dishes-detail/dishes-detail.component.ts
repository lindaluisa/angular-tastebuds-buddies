import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Dish } from '../dishes.model'
import { DishService } from '../dish.service';

@Component({
  selector: 'app-dishes-detail',
  templateUrl: './dishes-detail.component.html',
  styleUrls: ['./dishes-detail.component.css']
})

export class DishesDetailComponent implements OnInit {
  dishDetail: Dish;
  id: number;

  constructor(private dishService: DishService,
              private route: ActivatedRoute,
              private router: Router) { }

  // params observable
  // since we get a string back, we have to cast it to a num by adding a + sign 
  ngOnInit() {
    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.dishDetail = this.dishService.getDish(this.id);
      }
    )
  }

  onAddToShoppingList() {
    this.dishService.addIngredsToShoppingList(this.dishDetail.ingreds);
  }

  onEditDish() {
    this.router.navigate(['edit'], {relativeTo: this.route});
    // alternative: this.router.navigate(['../', this.id, 'edit', {relativeTo: this.route}]);
  }

  onDeleteDish() {
    this.dishService.deleteDish(this.id);
  }
}
