import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmprestimoFormComponent } from './emprestimo-form.component';

describe('EmprestimoFormComponent', () => {
  let component: EmprestimoFormComponent;
  let fixture: ComponentFixture<EmprestimoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmprestimoFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmprestimoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
