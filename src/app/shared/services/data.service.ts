import { Injectable } from 'angular2/core';
import { Http, Response } from 'angular2/http';

//Grab everything with import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/catch';


@Injectable()
export class DataService {
  
    baseUrl: string = '/src';

    constructor(private http: Http) { }
    
    getCustomers() {
        return this.http.get(this.baseUrl + '/customers.json')
                        .map((res: Response) => res.json())
                        .catch(this.handleError);
    }

    getOrders() {
      return this.http.get(this.baseUrl + '/orders.json')
                      .map((res: Response) => res.json())
                      .catch(this.handleError);               
    }

    getRecipes(private category: string) {
        return this.http.get(this.baseUrl + '/recipes.'+ category +'.json')
                        .map((res: Response) => res.json())
                        .catch(this.handleError);
    }

    getNavPills() {
        return this.http.get(this.baseUrl + '/navpills.json')
                        .map((res: Response) => res.json())
                        .catch(this.handleError);
    }
    
    handleError(error: any) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}
