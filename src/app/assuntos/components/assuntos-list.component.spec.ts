import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssuntosListComponent } from './assuntos-list.component';

describe('AssuntosListComponent', () => {
  let component: AssuntosListComponent;
  let fixture: ComponentFixture<AssuntosListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssuntosListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssuntosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
