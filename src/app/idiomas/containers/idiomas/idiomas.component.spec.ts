import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdiomasComponent } from './idiomas.component'

describe('IdiomasComponent', () => {
  let component: IdiomasComponent;
  let fixture: ComponentFixture<IdiomasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdiomasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdiomasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
