/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BreatheComponent } from './breathe.component';

describe('BreatheComponent', () => {
  let component: BreatheComponent;
  let fixture: ComponentFixture<BreatheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreatheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreatheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
