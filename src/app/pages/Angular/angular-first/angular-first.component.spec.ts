import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularFirstComponent } from './angular-first.component';

describe('AngularFirstComponent', () => {
  let component: AngularFirstComponent;
  let fixture: ComponentFixture<AngularFirstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AngularFirstComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
