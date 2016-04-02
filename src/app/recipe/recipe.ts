import { Component } from 'angular2/core';
import { CORE_DIRECTIVES } from 'angular2/common';
import { RouterLink, RouteParams } from 'angular2/router';
import { DataService } from '../shared/services/data.service';

@Component({ 
  selector: 'Recipe',
  providers: [DataService],
  templateUrl: 'app/recipe/recipe.component.html',
  directives: [CORE_DIRECTIVES, RouterLink]
})
export class RecipeComponent {
	
	title: string = 'recipe';
    filteredOrders: any[] = [];
  
    constructor(private _routeParams: RouteParams) {
      
    }
    
    ngOnInit() {
    }
}
