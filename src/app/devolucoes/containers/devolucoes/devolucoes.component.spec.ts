import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevolucoesComponent } from './devolucoes.component'

describe('DevolucoesComponent', () => {
  let component: DevolucoesComponent;
  let fixture: ComponentFixture<DevolucoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevolucoesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevolucoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
