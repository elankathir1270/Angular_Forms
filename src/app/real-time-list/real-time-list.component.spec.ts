import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealTimeListComponent } from './real-time-list.component';

describe('RealTimeListComponent', () => {
  let component: RealTimeListComponent;
  let fixture: ComponentFixture<RealTimeListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RealTimeListComponent]
    });
    fixture = TestBed.createComponent(RealTimeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
