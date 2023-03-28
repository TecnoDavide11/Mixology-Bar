import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DrinkService } from 'src/app/service/drink.service';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-dettagli-cocktail',
  templateUrl: './dettagli-cocktail.component.html',
  styleUrls: ['./dettagli-cocktail.component.css'],
  animations: [
    trigger('fadeInAnimation', [
      transition(':enter', [
        style({ opacity: 0.2 }),
        animate('400ms', style({ opacity: 1 }))
      ]),
    ]),
  ],
})
export class DettagliCocktailComponent implements OnInit{

    cocktailId!: string;
    cocktail: any;

    constructor(
      private route: ActivatedRoute,
      private drink: DrinkService
    ) {}

    ngOnInit() {
      this.route.paramMap.subscribe((params:any) => {
        this.cocktailId = params.get('id');
        this.drink.getCocktailById(this.cocktailId).subscribe((data:any) => {
          this.cocktail = data.drinks[0];
          console.log(data)
        });
      });
    }

}
