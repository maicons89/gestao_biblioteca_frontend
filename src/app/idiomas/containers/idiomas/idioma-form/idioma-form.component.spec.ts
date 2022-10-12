import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdiomaFormComponent } from './idioma-form.component';

describe('IdiomaFormComponent', () => {
  let component: IdiomaFormComponent;
  let fixture: ComponentFixture<IdiomaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdiomaFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdiomaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
