import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletDynamicFormComponent } from './complet-dynamic-form.component';

describe('CompletDynamicFormComponent', () => {
  let component: CompletDynamicFormComponent;
  let fixture: ComponentFixture<CompletDynamicFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompletDynamicFormComponent]
    });
    fixture = TestBed.createComponent(CompletDynamicFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
