import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExemplarFormComponent } from './exemplar-form.component';

describe('ExemplarFormComponent', () => {
  let component: ExemplarFormComponent;
  let fixture: ComponentFixture<ExemplarFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExemplarFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExemplarFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
