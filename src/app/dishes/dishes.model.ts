import { Ingredient } from '../shared/ingredient.model';

export class Dish {
  public name: string;
  public description: string;
  public imagePath: string;
  public ingreds: Ingredient[]

  constructor(name:string, desc: string, imagePath: string, ingreds: Ingredient[]) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.ingreds = ingreds;
  } 
}