import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import {RouterTestingModule} from '@angular/router/testing';
import {Component} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-hero-search',
  template: ''
})
class MockHeroSearchComponent {
}

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardComponent, MockHeroSearchComponent ],
      imports: [ RouterTestingModule, HttpClientModule  ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
