import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeItemModalComponent } from './change-item-modal.component';

describe('ChangeItemModalComponent', () => {
  let component: ChangeItemModalComponent;
  let fixture: ComponentFixture<ChangeItemModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChangeItemModalComponent]
    });
    fixture = TestBed.createComponent(ChangeItemModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
