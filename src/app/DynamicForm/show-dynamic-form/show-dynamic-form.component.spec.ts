import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDynamicFormComponent } from './show-dynamic-form.component';

describe('ShowDynamicFormComponent', () => {
  let component: ShowDynamicFormComponent;
  let fixture: ComponentFixture<ShowDynamicFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowDynamicFormComponent]
    });
    fixture = TestBed.createComponent(ShowDynamicFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
