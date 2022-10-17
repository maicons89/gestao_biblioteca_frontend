import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmprestimosListComponent } from './emprestimos-list.component';

describe('EmprestimosListComponent', () => {
  let component: EmprestimosListComponent;
  let fixture: ComponentFixture<EmprestimosListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmprestimosListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmprestimosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
