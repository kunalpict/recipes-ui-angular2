import { Component } from 'angular2/core';
import { CORE_DIRECTIVES } from 'angular2/common';
import { RouterLink, RouteParams } from 'angular2/router';
import { DataService } from '../shared/services/data.service';
import { RecipesGridComponent } from './component/recipes.grid';

@Component({ 
  selector: 'recipes',
  providers: [DataService],
  template: `<div>
  <span>Recipe here</span>
  <span>Select your favourite recipes</span>

  <ul class="nav nav-pills">
    <li  *ngFor="#pill of navpills"><a href="#/recipes{{pill.target}}">{{pill.name}}({{pill.count}})</a></li>
  </ul>
  <recipes-grid [category]="category"></recipes-grid>   
</div>`,
  directives: [CORE_DIRECTIVES, RouterLink, RecipesGridComponent]
})
export class RecipesComponent {
	
    navpills: any[] = [];
    category: string;
  
    constructor(private dataService: DataService, private _routeParams: RouteParams) {
      this.category = _routeParams.get('category');
    }
    
    ngOnInit() {
      this.dataService.getNavPills()
        .subscribe((navpills:any[]) => {
          console.log(navpills);
          
          this.navpills = navpills;
        });
    }
}
