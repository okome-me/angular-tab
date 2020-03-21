import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MockBComponent } from './mock-b.component';

describe('MockBComponent', () => {
  let component: MockBComponent;
  let fixture: ComponentFixture<MockBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MockBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MockBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
