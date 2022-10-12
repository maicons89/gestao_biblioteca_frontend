import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdiomasListComponent } from './idiomas-list.component';

describe('IdiomasListComponent', () => {
  let component: IdiomasListComponent;
  let fixture: ComponentFixture<IdiomasListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdiomasListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdiomasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
