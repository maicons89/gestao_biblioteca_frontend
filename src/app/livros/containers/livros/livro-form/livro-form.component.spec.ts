import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivroFormComponent } from './livro-form.component';

describe('LivroFormComponent', () => {
  let component: LivroFormComponent;
  let fixture: ComponentFixture<LivroFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivroFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LivroFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
