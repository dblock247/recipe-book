import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
	recipes: Recipe[] = [
		new Recipe('Scnitzel', 'Very tasty', 'http://www.duden.de/_media_/full/S/Schnitzel-201020474666.jpg', []),
		new Recipe('Salmon', 'My favorite', 'https://static01.nyt.com/images/2015/08/14/dining/14ROASTEDSALMON/14ROASTEDSALMON-articleLarge.jpg', [])
	];

	@Output() recipeSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe: Recipe) {
		this.recipeSelected.emit(recipe);
	}

}
