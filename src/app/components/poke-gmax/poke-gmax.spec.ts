import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeGmax } from './poke-gmax';

describe('PokeGmax', () => {
  let component: PokeGmax;
  let fixture: ComponentFixture<PokeGmax>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokeGmax],
    }).compileComponents();

    fixture = TestBed.createComponent(PokeGmax);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
