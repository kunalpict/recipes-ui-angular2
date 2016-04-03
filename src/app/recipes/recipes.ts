import { Component } from 'angular2/core';
import { CORE_DIRECTIVES } from 'angular2/common';
import { RouterLink, RouteParams } from 'angular2/router';
import { DataService } from '../shared/services/data.service';
import { RecipesGridComponent } from './component/recipes.grid';

@Component({ 
  selector: 'recipes',
  providers: [DataService],
  templateUrl: 'app/recipes/recipes.component.html',
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
