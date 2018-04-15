import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DishesComponent } from './dishes/dishes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const appRoutes: RouterModule = [
  { path: '', redirectTo: '/dishes', pathMatch: 'full' },
  { path: 'dishes', component: DishesComponent },
  { path: 'shopping-list', component: ShoppingListComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}