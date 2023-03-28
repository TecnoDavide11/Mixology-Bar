import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DrinkService } from 'src/app/service/drink.service';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  animations: [
    trigger('fadeInAnimation', [
      transition(':enter', [
        style({ opacity: 0.2 }),
        animate('600ms', style({ opacity: 1 }))
      ]),
    ]),
  ],
})
export class MenuComponent  implements OnInit{

  constructor(private dbDrink : DrinkService, private router:Router){}

  cocktails:any[]=[]

  ngOnInit(){
    this.dbDrink.getDrink().subscribe((data:any)=>{console.log(data)
    this.cocktails=data.drinks
    console.log(this.cocktails)
    })}

    showCocktailDetails(cocktailId: string) {
      this.router.navigate(['cocktail', cocktailId]);
    }

}
