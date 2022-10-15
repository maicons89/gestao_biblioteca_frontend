import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivrosListComponent } from './livros-list.component';

describe('LivrosListComponent', () => {
  let component: LivrosListComponent;
  let fixture: ComponentFixture<LivrosListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivrosListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LivrosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
