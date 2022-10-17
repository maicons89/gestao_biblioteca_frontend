import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmprestimosComponent } from './emprestimos.component'

describe('EmprestimosComponent', () => {
  let component: EmprestimosComponent;
  let fixture: ComponentFixture<EmprestimosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmprestimosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmprestimosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
