import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevolucoesListComponent } from './devolucoes-list.component';

describe('DevolucoesListComponent', () => {
  let component: DevolucoesListComponent;
  let fixture: ComponentFixture<DevolucoesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevolucoesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevolucoesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
