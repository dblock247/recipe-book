import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html'
})
export class RecipeItemComponent implements OnInit {
	id: number;
	@Input() recipe: Recipe;

  constructor() { }

  ngOnInit() {
  }

}
