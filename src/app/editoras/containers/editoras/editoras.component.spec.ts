import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorasComponent } from './editoras.component';

describe('EditorasComponent', () => {
  let component: EditorasComponent;
  let fixture: ComponentFixture<EditorasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditorasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditorasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
