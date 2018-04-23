import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


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
import { DishesEditComponent } from './dishes/dishes-edit/dishes-edit.component';
import { DishService } from './dishes/dish.service';


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
    DishStartComponent, 
    DishesEditComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [ShoppingListService, DishService],
  bootstrap: [AppComponent]
})
export class AppModule { }
