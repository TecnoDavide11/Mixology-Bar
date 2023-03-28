import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DrinkService {

  constructor( private http: HttpClient ) { }

  apiUrl = 'https://www.thecocktaildb.com/api/json/v1/1';

  getDrink(){
    return this.http.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
  }

  getCocktailById(cocktailId: string) {
    return this.http.get(`${this.apiUrl}/lookup.php?i=${cocktailId}`);
  }
}
