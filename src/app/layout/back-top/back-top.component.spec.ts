import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackTopComponent } from './back-top.component';

describe('BackTopComponent', () => {
  let component: BackTopComponent;
  let fixture: ComponentFixture<BackTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
