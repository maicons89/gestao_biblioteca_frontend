import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditoraFormComponent } from './editora-form.component';

describe('EditoraFormComponent', () => {
  let component: EditoraFormComponent;
  let fixture: ComponentFixture<EditoraFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditoraFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditoraFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
