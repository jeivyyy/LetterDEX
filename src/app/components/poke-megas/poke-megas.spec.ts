import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeMegas } from './poke-megas';

describe('PokeMegas', () => {
  let component: PokeMegas;
  let fixture: ComponentFixture<PokeMegas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokeMegas],
    }).compileComponents();

    fixture = TestBed.createComponent(PokeMegas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
