import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DishesComponent } from './dishes/dishes.component';
import { DishesListComponent } from './dishes/dishes-list/dishes-list.component';
import { DishesDetailComponent } from './dishes/dishes-detail/dishes-detail.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { DishesItemComponent } from './dishes/dishes-list/dishes-item/dishes-item.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { AppRoutingModule } from './app-routing.module';
import { DishStartComponent } from './dishes/dish-start/dish-start.component';


@NgModule({
  declarations: [
    AppComponent,
    DishesComponent,
    DishesListComponent,
    DishesDetailComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    HeaderComponent,
    DishesItemComponent, 
    DropdownDirective, 
    DishStartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
