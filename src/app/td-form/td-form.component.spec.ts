import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TdFormComponent } from './td-form.component';

describe('TdFormComponent', () => {
  let component: TdFormComponent;
  let fixture: ComponentFixture<TdFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TdFormComponent]
    });
    fixture = TestBed.createComponent(TdFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
