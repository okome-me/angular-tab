import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdTabComponent } from './ad-tab.component';

describe('AdTabComponent', () => {
  let component: AdTabComponent;
  let fixture: ComponentFixture<AdTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
