import { Component } from 'angular2/core';
import { ROUTER_DIRECTIVES, RouteConfig } from 'angular2/router';
import { RecipesComponent } from './recipes/recipes';
import { RecipeComponent } from './recipe/recipe';

@Component({ 
  selector: 'app-container',
  template: `<router-outlet></router-outlet>`,
  directives: [ROUTER_DIRECTIVES],
})
@RouteConfig([
  { path: '/', as: 'Recipes', component: RecipesComponent, useAsDefault: true },
  { path: '/recipes/:category', as: 'Recipes', component: RecipesComponent},
  { path: '/recipe/:id', as: 'Recipe', component: RecipeComponent    }
])
export class AppComponent {
  
  constructor() {

  }
  
}
