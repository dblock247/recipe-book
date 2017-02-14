import { Injectable } from '@angular/core';
import {Recipe} from "./recipe";

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('Scnitzel', 'Very tasty', 'http://www.duden.de/_media_/full/S/Schnitzel-201020474666.jpg', []),
    new Recipe('Salmon', 'My favorite', 'https://static01.nyt.com/images/2015/08/14/dining/14ROASTEDSALMON/14ROASTEDSALMON-articleLarge.jpg', [])
  ];

  constructor() { }

  getRecipes() {
    return this.recipes;
  }

}
