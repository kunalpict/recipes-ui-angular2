import { Component } from 'angular2/core';
import { CORE_DIRECTIVES } from 'angular2/common';
import { RouterLink, RouteParams } from 'angular2/router';
import { DataService } from '../shared/services/data.service';

@Component({ 
  selector: 'recipes',
  providers: [],
  templateUrl: 'app/recipes/recipes.component.html',
  directives: [CORE_DIRECTIVES, RouterLink]
})
export class RecipesComponent {
	
	title: string = 'Recipes';
    filteredOrders: any[] = [];
  
    constructor(private _routeParams: RouteParams) {
      
    }
    
    ngOnInit() {
    	this.title = 'recipes';
    }
}
