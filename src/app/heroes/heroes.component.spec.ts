import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesComponent } from './heroes.component';
import {Component, Input} from '@angular/core';
import {Hero} from '../hero';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientModule} from '@angular/common/http';


@Component({
  selector: 'app-hero-detail',
  template: ''
})
class MockHeroesDetailComponent {
  @Input() hero: Hero;
}

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroesComponent, MockHeroesDetailComponent ],
      imports: [ RouterTestingModule, HttpClientModule  ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
