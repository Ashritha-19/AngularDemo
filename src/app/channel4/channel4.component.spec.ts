import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Channel4Component } from './channel4.component';

describe('Channel4Component', () => {
  let component: Channel4Component;
  let fixture: ComponentFixture<Channel4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Channel4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Channel4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
