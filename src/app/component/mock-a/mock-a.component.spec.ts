import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MockAComponent } from './mock-a.component';

describe('MockAComponent', () => {
  let component: MockAComponent;
  let fixture: ComponentFixture<MockAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MockAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MockAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
