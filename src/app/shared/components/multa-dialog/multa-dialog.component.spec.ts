import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultaDialogComponent } from './multa-dialog.component';

describe('MultaDialogComponent', () => {
  let component: MultaDialogComponent;
  let fixture: ComponentFixture<MultaDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultaDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
