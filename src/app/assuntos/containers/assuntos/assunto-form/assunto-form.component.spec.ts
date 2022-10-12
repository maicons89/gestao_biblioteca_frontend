import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssuntoFormComponent } from './assunto-form.component';

describe('AssuntoFormComponent', () => {
  let component: AssuntoFormComponent;
  let fixture: ComponentFixture<AssuntoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssuntoFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssuntoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
