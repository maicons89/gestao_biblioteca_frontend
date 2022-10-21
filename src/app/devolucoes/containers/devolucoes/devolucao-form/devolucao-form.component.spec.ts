import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevolucaoFormComponent } from './devolucao-form.component';

describe('DevolucaoFormComponent', () => {
  let component: DevolucaoFormComponent;
  let fixture: ComponentFixture<DevolucaoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevolucaoFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevolucaoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
