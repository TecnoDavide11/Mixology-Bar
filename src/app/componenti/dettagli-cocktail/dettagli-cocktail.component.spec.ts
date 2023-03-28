import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DettagliCocktailComponent } from './dettagli-cocktail.component';

describe('DettagliCocktailComponent', () => {
  let component: DettagliCocktailComponent;
  let fixture: ComponentFixture<DettagliCocktailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DettagliCocktailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DettagliCocktailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
